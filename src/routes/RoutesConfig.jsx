import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Views/Home'
import Login from '../Views/Login'
import UserRegister from '../Views/UserRegister'
import Category from '../Views/Category'
import AdminRegister from '../Views/AdminRegister'
import Profile from '../Views/Profile'
import Section from '../Views/Section'


function RoutesConfig(){
  return(

    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <UserRegister/> } />
        <Route path="/category/:id" element={ <Category/> } />
        <Route path="/section/:id" element={ <Section/> } />
        <Route path="/admin-register" element={ <AdminRegister/> } />
        <Route path="/register" element={ <Profile/> } />
      </Routes>
    </Router>
  )
}

export default RoutesConfig