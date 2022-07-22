import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import uuid from 'react-uuid'
import axios from '../api/axios'
import Navbar from '../Components/Navbar'
import Arrow from '../media/icons/Arrow'



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
      <h1 className='flex justify-center text-5xl text-center md:mb-20 py-2 m-8 text-[#BC4E2A] uppercase'>{ section.title }</h1>
      {/* <p className = "justify-center text-center text-[#E57A56]">{ section.category }</p> */}
      <div id="links" className="md:columns-2 md:px-2	md:break-after-column md:m-6">

        {section.text && section.text.map(element => {
        
          if (element[0] === 'p') return <p className = "justify-center	 m-4 mt-0" key={uuid()}>{element[1]}</p>
          if (element[0] === 'a') return <a  href={element[2]} key={uuid()} className="block justify-center my-2 mx-4 decoration-solid font-bold outline-offset-3 text-[#BC4E2A]">{element[1]}</a>
        })}
      </div>
      
      <div className='m-4'>
        <Arrow />
      </div>
    </>

  )
}

export default Section