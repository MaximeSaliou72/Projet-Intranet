import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/css/styles.css'
import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './views/login';
import Register from './views/register';
import Collaborators from './views/collaborators'
import Logout from './views/logout'
import Edit from './views/edit'
import Random from './views/random'

function App() {

  return (
    <BrowserRouter>
        <header className="App-header">
            <ul>
                <li className='navName'>
                    <NavLink to={'/collaborators'}>Liste</NavLink>
                </li>
                <li className='navName'>
                    <NavLink to={'/register'}>Ajouter</NavLink>
                </li>
                <li className='navName'>
                    <NavLink to={'/logout'}>Deconnexion</NavLink>
                </li>
            </ul>
        </header>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/collaborators" element={ <Collaborators /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/edit" element={ <Edit /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/random" element={ <Random /> } />
        <Route path="*" element={ <main><h1>404 NOT FOUND</h1></main> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
