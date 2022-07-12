import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from '../Views/Home'
import Login from '../Views/Login'
import UserRegister from '../Views/UserRegister'
import Category from '../Views/Category'
import AdminRegister from '../Views/AdminRegister'


function RoutesConfig(){
  return(

    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <UserRegister/> } />
        <Route path="/category" element={ <Category/> } />
        <Route path="/admin-register" element={ <AdminRegister/> } />
      </Routes>
    </Router>
  )
}

export default RoutesConfig