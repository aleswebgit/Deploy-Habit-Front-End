import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    const token = Cookies.get('token')
    const idUser = Cookies.get('idUser')
    const roles = Cookies.get('roles')

    if (token && idUser && roles) {
      setAuth({ token, idUser, roles })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext