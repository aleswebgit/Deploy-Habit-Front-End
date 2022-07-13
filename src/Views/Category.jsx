import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import Navbar from '../Components/Navbar'
// import SectionButton from '../Components/SectionButton'


const Category = () => {
  const selectCategory = useParams().id
  // const navigate = useNavigate()
  // const [category, setCategory] = useState({})
  const [filter, setFilter] = useState('')
  // const [sections, setSections] = useState([])

  useEffect(() => {
    selectCategory == 2 ? setFilter('nutrición') 
      : selectCategory == 3
        ? setFilter('ejercicio físico')
        : selectCategory == 4
          ? setFilter('salud mental')
          : setFilter('sueño')
  }, [])
  
  const sectionsOfCategoryRequest = async () =>{
    try {
      const response = await axios.get('/sections',
        {
          headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'x-access-token': localStorage.getItem('token')
          },
        }
      ).then(response => {
        // setCategory(response.data)
        console.log(response.data)
        // const filterSections = response.data.filter(section => section.category === filter)
        // setSections(filterSections)
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    sectionsOfCategoryRequest
  }, [])

  return (
    <>
      <Navbar />
      <h1 className='flex justify-center text-5xl text-center py-2 m-8 text-[#BC4E2A] uppercase'>{filter}</h1>
    </>
  )
}

export default Category