import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Views/Home';
import Test from './Views/Test';
import Landing from './Views/Landing';
import Login from './Views/Login';
import Register from './Views/Register';
import React, { useEffect, useState } from 'react';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },1000)
  },[])

  return (
    <div>
      {loading ? 
      <Landing
      loading = {loading}/> 
      : <Home/>}

      <Router>

        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/landing">Landing</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/test" element={ <Test/> } />
          <Route path="/landing" element={ <Landing/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={ <Register/> } />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
