import React from 'react'
import {Link, useHistory, useLocation } from 'react-router-dom'

const People = (props) => {
    const location = useLocation(); // hooks para ver las rutas y parametros enviado desde la solicitud
    const history = useHistory(); // hooks para manejar el browser (redirigir, regresar, ir)
    console.log(location, history)
    return (
        <>
        <Link to="/login">Otra ruta </Link>
        <h2>
            People   
        </h2>
        <button onClick={() => console.log('ola') }>Redirigir</button>
        </>
    )
}

export default People
