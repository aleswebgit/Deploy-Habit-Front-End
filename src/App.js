import './App.css'
import React from 'react'
import RoutesConfig from './routes/RoutesConfig.jsx'
import { AuthProvider } from './context/AuthProvider'


function App() {

  return (
    <div className="bg-[#FDF6EC]">
      <AuthProvider>
        <RoutesConfig />
      </AuthProvider>
    </div>
  )
}

export default App

