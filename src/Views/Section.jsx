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
      <h1>{ section.title }</h1>
      <p>{ section.category }</p>
      {section.text && section.text.map(element => {
        if (element[0] === 'p') return <p key={uuid()}>{element[1]}</p>
        if (element[0] === 'a') return <a href={element[2]} target="_blank"  rel="noopener noreferrer" key={uuid()} className="block">{element[1]}</a>
      })}
    </>

  )
}

export default Section