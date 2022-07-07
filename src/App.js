import './App.css';
import React from 'react';
import RoutesConfig from './routes/RoutesConfig.jsx';
import Navbar from './Components/Navbar.jsx';


function App() {

  return (
    <div>
      <RoutesConfig />
      <Navbar/>
    </div>
  );
}

export default App;
