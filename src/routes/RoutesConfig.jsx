import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../Views/Home';
import Landing from '../Views/Landing';
import Login from '../Views/Login';
import Register from '../Views/Register';
import Section from '../Views/Section';


function RoutesConfig(){
    return(

    <Router>

        <Link to="/"></Link>
        <Link to="/test">Test</Link>
        <Link to="/landing">Landing</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/landing" element={ <Landing/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/section" element={ <Section/> } />
        </Routes>

    </Router>

    );
}

export default RoutesConfig