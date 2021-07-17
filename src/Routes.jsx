import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import TaskMain from './pages/Tasks/TaskMain'
const Routes = () => {
    return (
      
        <>
        {/* NOTA: EL ENRUTADOR (ROUTER O BROWSERROUTER) SOLO DEBE SER 1 ESTO NOS PERMITE USAR EL BOM (BROWSER OBJECT MODEL) */}
        <Router>
            <Menu />
            {/* SWITCH DETERMINA CUAL RUTA ESCOGER ENTRE DOS RUTAS CON EL MISMO NOMBRE O SIMILAR GANA EL PRIMER DEFINIDO */}
            <Switch>
                <Route exact path="/">
                    {/* mi componente */}
                    <h2>Pagina Inicio</h2>
                      {/* fin mi componente */}
                </Route>
                <Route exact path="/login">
                    <div>
                        <h2>Iniciar Sesion</h2>
                        <input type="text" />
                        <input type="password" />
                        <button>Login</button>
                    </div>
                </Route>
                <Route exact path="/user">
                    <h2>Lista Usuarios</h2>
                   
                </Route>
                <Route path="/user/:id">
                    <h2>Detalle del Usuario</h2>
                </Route>
                {/* */}
                <Route path="/tasks" component={TaskMain} />
            </Switch>
        </Router>
        </>
    )
}

export default Routes
