import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from '../Views/Home'
import Landing from '../Views/Landing'
import Login from '../Views/Login'
import Register from '../Views/Register'
import Section from '../Views/Section'


function RoutesConfig(){
  return(

    <Router>


      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/section" element={ <Section/> } />
      </Routes>

    </Router>

  )
}

export default RoutesConfig