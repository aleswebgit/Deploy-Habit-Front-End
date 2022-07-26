import { createContext, useCallback, useState,useMemo, useContext } from 'react'



export const AuthContext = createContext()

export function AuthContextProvider ({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem('token') ?? false)

  const login = useCallback (function (){
    window.localStorage.setItem('token', true)
    setIsAuthenticated(true) 
  }, [])

  const logout = useCallback (function (){
    window.localStorage.removeItem('token')
    setIsAuthenticated(false)  
  }, [])

  const value = useMemo (
    () => ({
      isAuthenticated,
      login,
      logout

    }),
    [isAuthenticated, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  
}

export function useAuthContext(){
  return useContext(AuthContext)
}


  