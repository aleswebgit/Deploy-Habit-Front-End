import './App.css';
import Home from './Views/Home';
import Landing from './Views/Landing';
import React, { useEffect, useState } from 'react';
import RoutesConfig from './routes/RoutesConfig'


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

      <RoutesConfig />
      

    </div>
  );
}

export default App;
