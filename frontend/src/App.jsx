import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Login from './pages/login.jsx'
import Register from './pages/registre.jsx'
import InformationPage from './pages/informationPage.jsx'

function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/Register' element={<Register></Register>}></Route>
          <Route path='/information' element={<InformationPage></InformationPage>}></Route> 
          </Routes>
      </>
    )
  }

export default App
