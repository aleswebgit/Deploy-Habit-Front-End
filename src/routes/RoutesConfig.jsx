import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from '../Views/Home'
import Landing from '../Views/Landing'
import Login from '../Views/Login'
import Register from '../Views/UserRegister'
import Section from '../Views/Section'
import AdminRegister from '../Views/AdminRegister'


function RoutesConfig(){
  return(

    <Router>


      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/section" element={ <Section/> } />
        <Route path="/adminRegister" element={ <AdminRegister/> } />
      </Routes>

    </Router>

  )
}

export default RoutesConfig