import React from 'react'
import axios from 'axios';

const apiUsers = 'http://localhost:5000/users'

const Users = () => {

    const getAllUsers = async () => {

        // let userDeleted = await axios.delete(`${apiUsers}/1`)
        // let usersEdit = await axios.put(`${apiUsers}/1`, {username: '', nombre: '', apellido: ''})
        // let userCreated = await axios.post(`${apiUsers}`, {username: '', nombre: '', apellido: ''})
        // let usersList = await axios.get(`${apiUsers}`)
        // let userFound = await axios.get(`${apiUsers}/1`)
        //console.log(users.data);






        // method GET lista de elementos (users) o una lista simple (1 user)

        const options = {
            method: 'GET', // GET (Lista) | POST (Crea) | DELETE (Elimina) | PUT (Actualiza)
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(jsonData) // solo se usa en POST y PUT
        }

        // 200 - 299 => estados exitosos
        // 300 - 399 => estados de redireccion
        // 400 - 499 => estados de error del cliente
        // 500 - 599 => estados de error del servidor

        let respuesta = await fetch(`${apiUsers}//sdfjsjfjshfs`, options) // consumir recursos externos 
            
        // if(respuesta.status !== 200){
        //     alert('error')
        // }
        console.log(respuesta)
        // .then( respuesta => respuesta.json() ) // formato de respuesta
            // .then( respuesta => console.log(respuesta)) // valor en caso de exito
            // .catch( error => console.log(error)) // valor en caso de rechazo 
    }

    const createUser = () => {

        // method GET lista de elementos (users) o una lista simple (1 user)

        const options = {
            method: 'POST', // GET (Lista) | POST (Crea) | DELETE (Elimina) | PUT (Actualiza)
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: "Alan",
                apellido: "Espinoza",
                username: "AlanEspinoza"
            }) // solo se usa en POST y PUT
        }

        // 200 - 299 => estados exitosos
        // 300 - 399 => estados de redireccion
        // 400 - 499 => estados de error del cliente
        // 500 - 599 => estados de error del servidor

        fetch(apiUsers, options) // consumir recursos externos 
            .then( respuesta => respuesta.json() ) // formato de respuesta
            .then( respuesta => console.log(respuesta)) // valor en caso de exito
            .catch( error => console.log(error)) // valor en caso de rechazo 
    }

    const upateUser = () => {

        // method GET lista de elementos (users) o una lista simple (1 user)

        const options = {
            method: 'PUT', // GET (Lista) | POST (Crea) | DELETE (Elimina) | PUT (Actualiza)
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: "Alan",
                apellido: "Espinoza",
                username: "AlanE"
            }) // solo se usa en POST y PUT
        }

        // 200 - 299 => estados exitosos
        // 300 - 399 => estados de redireccion
        // 400 - 499 => estados de error del cliente
        // 500 - 599 => estados de error del servidor

        fetch(`${apiUsers}/3`, options) // consumir recursos externos 
            .then( respuesta => respuesta.json() ) // formato de respuesta
            .then( respuesta => console.log(respuesta)) // valor en caso de exito
            .catch( error => console.log(error)) // valor en caso de rechazo 
    }

    const singleUser = () => {

        // method GET lista de elementos (users) o una lista simple (1 user)

        const options = {
            method: 'GET', // GET (Lista) | POST (Crea) | DELETE (Elimina) | PUT (Actualiza)
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(jsonData) // solo se usa en POST y PUT
        }

        // 200 - 299 => estados exitosos
        // 300 - 399 => estados de redireccion
        // 400 - 499 => estados de error del cliente
        // 500 - 599 => estados de error del servidor

        fetch(`${apiUsers}/2`, options) // consumir recursos externos 
            .then( respuesta => respuesta.json() ) // formato de respuesta
            .then( respuesta => console.log(respuesta)) // valor en caso de exito
            .catch( error => console.log(error)) // valor en caso de rechazo 

    }

    const deleteUser = () => {

        // method GET lista de elementos (users) o una lista simple (1 user)

        const options = {
            method: 'DELETE', // GET (Lista) | POST (Crea) | DELETE (Elimina) | PUT (Actualiza)
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(jsonData) // solo se usa en POST y PUT
        }

        // 200 - 299 => estados exitosos
        // 300 - 399 => estados de redireccion
        // 400 - 499 => estados de error del cliente
        // 500 - 599 => estados de error del servidor

        fetch(`${apiUsers}/1`, options) // consumir recursos externos 
            .then( respuesta => respuesta.json() ) // formato de respuesta
            .then( respuesta => console.log(respuesta)) // valor en caso de exito
            .catch( error => console.log(error)) // valor en caso de rechazo 

    }

    return (
        <div>
            <h2>Lista de Usuario con Fetch</h2>

            <button onClick={getAllUsers}>Fetch via GET</button>
            <button onClick={createUser}>Fetch via POST</button>
            <button onClick={upateUser}>Fetch via PUT</button>
            <button onClick={singleUser}>Fetch via GET con Parametro</button>
            <button onClick={deleteUser}>Fetch via DELETE con Parametro</button>
        </div>
    )
}

export default Users


/* 


async function nombreMiFuncion = (){

    let mirespuesta = await funcionQueRetotneUnaPromesa
} 


async () => {
    let mirespuesta = await funcionQueRetotneUnaPromesa
    
}

const miFuncion = async () => {
    let mirespuesta = await funcionQueRetotneUnaPromesa

}

*/