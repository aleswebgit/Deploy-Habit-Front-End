import './App.css'
import React from 'react'
import RoutesConfig from './routes/RoutesConfig.jsx'
import Navbar from './Components/Navbar.jsx'


function App() {



  return (
    <div>
      <Navbar/>
      <h1 className='flex justify-center text-[#BC4E2A]'>Sobre el proyecto</h1>
      <RoutesConfig />
    </div>
  )
}

export default App