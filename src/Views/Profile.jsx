import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import Navbar from '../Components/Navbar'
// import UserRegisterForm from '../Components/UserRegisterForm'
// import Arrow from '../media/icons/Arrow'

const Profile = () => {
  const userId = useParams().id
  const [user, setUser] = useState({})

  const userRequest = async () => {
    try {
      const response = await axios.get(`/users/${userId}`,
        {
          headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'x-access-token': localStorage.getItem('token')
          },
        }
      ).then(response => {
        setUser(response.data)
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    userRequest()
  }, [])

  return (
    <>
      <Navbar />
      <h1 className='flex justify-center text-5xl text-center py-2 m-8 text-[#BC4E2A]'>Tu perfil</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* <UserRegisterForm/>
      <Arrow/> */}
    </>
  )
}
export default Profile