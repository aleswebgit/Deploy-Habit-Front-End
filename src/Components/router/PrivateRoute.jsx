import { LOGIN} from '../../config/Paths'
import {Navigate, Outlet} from 'react-router-dom'
import {useAuthContext} from '../../context/AuthContext'

function PrivateRoute () {
  const { isAuthenticated} = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to ={LOGIN} />
  }

  return (
    <>
      <Outlet />
    </>
  )
    
}

export default PrivateRoute