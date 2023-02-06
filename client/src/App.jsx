import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/css/styles.css'
import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './views/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="*" element={ <main><h1>404 NOT FOUND</h1></main> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
