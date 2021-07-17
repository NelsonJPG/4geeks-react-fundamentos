import { useState, useEffect } from 'react'
import People from '../People/People';

const api4Geek = 'http://localhost:5000/tasks';

const TaskMain = () => {
    // definir todos sus estados
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('')
    const [puedeEditar, setPuedeEditar] = useState(false)
    const [editSelected, setEditSelected] = useState(null)
    const [editTask, setEditTask] = useState('')

    const getTasks = () => {
        // PETICION GET PARA OBTENER LA LISTA 
        fetch(`${api4Geek}`)
        .then( response => response.json())
        .then( response => setTasks(response))
    }

    const handleAddTask = event => {
        if(event.key === "Enter"){
            // el spread hace referencia a todas mis tareas actuales + nueva (newTask)
            
            // POST PARA CREAR
            fetch(`${api4Geek}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ label: newTask })
            })
            .then( response => response.json())
            .then( response => setTasks([...tasks, response ]))
            
            setNewTask('');
        }
    }

    const handleEditTask = (event) => {
        // paso 1: buscar en nuestra lista la posicion que quiero actualizar 
        // y comparar con el id que llega de argumento
         
        if(event.key === "Enter"){
             

            // PUT PARA EDITAR
            fetch(`${api4Geek}/${editSelected.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ label: editTask })
            })
            .then( response => response.json())
            .then( response => {

                setTasks(
                    tasks.map( task => {
                        if(task.id === response.id){
                            task.label = response.label
                        }
                        return task
                    })
                )
            })

           setEditTask('')
           setPuedeEditar(false)
        }
        // paso 2: borrar la posicion de busqueda e insertar el nuevo valor en esa misma posicion

    }

    const handleDeleteTask = id => {

        // PARA BORRAR
        fetch(`${api4Geek}/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then( response => response.json())
        .then( response => {
        
            setTasks(
                tasks.filter( task => task.id !== id)
            )
        })

    }
    // sus efectos secundarios PUEDO USAR MAS DE UN USEEFFECT

    // fase de montaje 
    useEffect(() => {
        if(!tasks.length){
            getTasks()
        }
    }, [tasks.length])

    //   // fase de actualizacion
    // useEffect(() => {
        
    // }, [])

    return (
        <div>
            <h3>Modulo de Tareas</h3>
            <People />
            
            { puedeEditar? 
                null
            :
            <input 
                type="text" 
                onChange={(event) => setNewTask(event.target.value) } 
                value={newTask}
                onKeyPress={ handleAddTask } 
            />
            }

            <ul>
                { 
                    tasks.length? 
                    tasks.map( (task, index) => 
                        ( 
                            <li key={index}>
                                {task.label}
                                <button onClick={ () => {
                                    setPuedeEditar(true)
                                    setEditSelected( task )
                                    setEditTask(task.label)
                                } }>Editar</button>
                                <button onClick= { () => handleDeleteTask(task.id)}>Eliminar</button>
                            </li>
                        )) 
                    : null
                }
            </ul>
            { puedeEditar?

                <input 
                    type="text" 
                    onChange={(event) =>  setEditTask(event.target.value) } 
                    value={editTask} 
                    onKeyPress={ handleEditTask } 
                />
            : null }
        </div>
    )
}

export default TaskMain
