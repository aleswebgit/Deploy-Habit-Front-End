import { PRIVATE } from '../../config/Paths'
import {Navigate, Outlet} from 'react-router-dom'
import {useAuthContext} from '../../context/AuthContext'

function PublicRoute () {
  const { isAuthenticated} = useAuthContext()

  if (isAuthenticated) {
    return <Navigate to ={PRIVATE} />
  }

  return (
    <>
      <Outlet />
    </>
  )
    
}

export default PublicRoute