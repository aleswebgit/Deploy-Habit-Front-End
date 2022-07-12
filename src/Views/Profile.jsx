import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import Navbar from '../Components/Navbar'

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
      <h1>Profile</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </>
  )
}
export default Profile