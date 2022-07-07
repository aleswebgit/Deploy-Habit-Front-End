import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../Views/Home'
import Landing from '../Views/Landing'
import Login from '../Views/Login'
import Register from '../Views/Register'
import Section from '../Views/Section'
import AdminRegister from '../Views/AdminRegister'


function RoutesConfig(){
  return(

    <Router>

      {/* <Link to="/"></Link>
        <Link to="/home"></Link>
        <Link to="/test"></Link>
        <Link to="/landing"></Link>
        <Link to="/login"></Link>
        <Link to="/register"></Link> */}

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/landing" element={ <Landing/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/section" element={ <Section/> } />
        <Route path="/adminRegister" element={ <AdminRegister/> } />
      </Routes>

    </Router>

  )
}

export default RoutesConfig