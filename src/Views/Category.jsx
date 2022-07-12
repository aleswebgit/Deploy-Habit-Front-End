import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios'
import Navbar from '../Components/Navbar'
import SectionButton from '../Components/SectionButton'


const Category = () => {
  const selectCategory = useParams().id
  const navigate = useNavigate()
  // const [category, setCategory] = useState({})
  const [filter, setFilter] = useState('sueño')
  const [sections, setSections] = useState([])

  selectCategory === 2 ? setFilter('nutricion') 
    : selectCategory === 3
      ? setFilter('salud mental')
      : selectCategory === 4
        ? setFilter('deporte')
        : setFilter('sueño')
  
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
        const filterSections = response.data.filter(section => section.category === filter)
        setSections(filterSections)
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    sectionsOfCategoryRequest()
  },[])

  return (
    <>
      <Navbar />
      <h1>Sueño</h1>
      {sections.map(section => {
        {/* return (
          <div key={section.id}>
            <SectionButton name={section.name} />
          </div>
        ) */}
        return <SectionButton key={selectCategory} name={section.name} onClick={() => navigate('/section/' + section.id)} />
      })}
      {/* <SectionButton text='Subapartado uno'/>
      <SectionButton text='Subapartadp dos '/>
      <SectionButton text='Subapartadp tres'/>
      <SectionButton text='Subapartadp cuatro'/>
      <SectionButton text='Subapartadp cinco'/> */}
    </>
  )
}

export default Category