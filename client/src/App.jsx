import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/css/styles.css'
import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './views/login';
import Register from './views/register';
import Collaborators from './views/collaborators'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/collaborators" element={ <Collaborators /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <main><h1>404 NOT FOUND</h1></main> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
