import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import uuid from 'react-uuid'
import axios from '../api/axios'
import Navbar from '../Components/Navbar'



const Section =() => {
  const sectionId = useParams().id
  const [section, setSection] = useState({})
  
  const sectionRequest = async () =>{
    try {
      await axios.get(`/sections/${sectionId}`,
        {
          headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'x-access-token': localStorage.getItem('token')
          },
        }
      ).then(response => {
        setSection(response.data)
      })
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
      <h1 className='flex justify-center text-5xl text-center py-2 m-8 text-[#BC4E2A] uppercase'>{ section.title }</h1>
      <p className = "justify-center text-center text-[#E57A56]">{ section.category }</p>
      {section.text && section.text.map(element => {
        if (element[0] === 'p') return <p className = "justify-center m-4" key={uuid()}>{element[1]}</p>
        if (element[0] === 'a') return <a  href={element[2]} key={uuid()} className="block justify-center my-2 mx-4 decoration-solid">{element[1]}</a>
      })}
    </>

  )
}

export default Section