import { useState, useEffect } from 'react'

const TaskMain = () => {
    // definir todos sus estados
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('')
    const [puedeEditar, setPuedeEditar] = useState(false)
    const [editSelected, setEditSelected] = useState(null)
    const [editTask, setEditTask] = useState('')


    const handleAddTask = event => {
        if(event.key === "Enter"){
            // el spread hace referencia a todas mis tareas actuales + nueva (newTask)
            setTasks([...tasks,{ id: (tasks.length + 1) , label:  newTask } ]);
            setNewTask('');
        }
    }


    const handleEditTask = (event) => {
        // paso 1: buscar en nuestra lista la posicion que quiero actualizar 
        // y comparar con el id que llega de argumento
         
        if(event.key === "Enter"){
             
            setTasks(
                tasks.map( task => {
                    if(task.id === editSelected.id){
                        task.label = editTask
                    }
                    return task
                })
            )
            
           setEditTask('')
           setPuedeEditar(false)
        }
        // paso 2: borrar la posicion de busqueda e insertar el nuevo valor en esa misma posicion

    }

    const handleDeleteTask = id => setTasks( tasks.filter( task => task.id !== id ))
    // sus efectos secundarios PUEDO USAR MAS DE UN USEEFFECT

    // fase de montaje 
    useEffect(() => {
        if(!tasks.length){
            setTasks([
              { id: 1, label: 'Aprendiendo Javascript' }  // hard code
            ])
        }
    }, [tasks.length])

    //   // fase de actualizacion
    // useEffect(() => {
        
    // }, [])

    return (
        <div>
            <h3>Modulo de Tareas</h3>
            
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
