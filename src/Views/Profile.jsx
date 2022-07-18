import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import MyProfileForm from '../Components/MyProfileForm'
import Navbar from '../Components/Navbar'
import Arrow from '../media/icons/Arrow'

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
      <div className ="md:flex ">
        <div className='p-4 md:max-w-[20%] md:max-h-[300px] md:min-w-[20%] my-auto bg-[#F8D1B4] w-[85%] md:px-[40%] mx-auto rounded-3xl'>
          <p className='bg-[#E57A56] rounded-full p-2  mx-2 text-center text-sm font-bold text-white'>Nombre:</p>
          <p className='bg-white rounded-full p-2  mx-2 text-center text-sm'>{user.email}Alex Vidal Romero</p>
          <p className='bg-[#E57A56] rounded-full p-2  mx-2 text-center text-sm font-bold text-white'>Email:</p>
          <p className='bg-white rounded-full p-2  mx-2 text-center text-sm'>{user.email}user1@gmail.com</p>
        </div>
        <MyProfileForm/>
      </div>
      <div className='m-4'>
        <Arrow />
      </div>
    </>
  )
}
export default Profile