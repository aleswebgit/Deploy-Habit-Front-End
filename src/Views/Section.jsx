import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import Navbar from '../Components/Navbar'



const Section =() => {
  const sectionId = useParams().id
  const [section, setSection] = useState({})
  
  const sectionRequest = async () =>{
    try {
      const response = await axios.get(`/sections/${sectionId}`,
        {
          headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'x-access-token': localStorage.getItem('token')
          },
        }
      ).then(response => {
        setSection(response.data)
        console.log(response.data)
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    sectionRequest()
  },[])


  return (
    <>
      <Navbar />
      <h1>{ section.name }</h1>
      <h2>{ section.text }</h2>
      <p>{ section.description }</p>
      <p>{ section.category }</p>
        
    </>

  )
}


export default Section