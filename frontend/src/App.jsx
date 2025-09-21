import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/registre.jsx'
import LandingPage from './pages/LandingPage.jsx'
  function App() {
    return (
      <>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/' element={<LandingPage/>}></Route>
        </Routes>
      </>
    )
  }

export default App
