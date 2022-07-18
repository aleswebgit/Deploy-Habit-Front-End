import { useEffect, useState } from 'react'
import CategoryData from '../Components/CategoryData'
import Landing from '../Views/Landing'
import Inquiry from '../Components/Inquiry'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'


const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=> {
      setLoading(false)
    },1000)
  },[])

  return (
    <div>
      {loading 
        ? <Landing loading = {loading}/> 
        : (
          <>
            <Navbar/>
            <div className='flex flex-col lg:flex-row justify-center h-full'>
              <section className='lg:w-2/5 h-full flex justify-center relative'>
                <Title/>
              </section>
              <section className='lg:w-3/5 h-full'>
                <CategoryData />
              </section>
              <div className='lg:flex lg:fixed lg:bottom-10 bottom-0 lg:left-8'>
                <Inquiry/>
              </div> 
            </div>
          </>
        )}
    </div>
    

  )
}

export default Home