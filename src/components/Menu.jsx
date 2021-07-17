import React from 'react'
import {Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/user">Usuario</Link>
            </li>
            <li>
                <Link to="/tasks">Tareas</Link>
            </li>
        </ul>
    )
}

export default Menu
