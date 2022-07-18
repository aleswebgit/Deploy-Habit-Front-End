import { useEffect, useState } from 'react'
import CategoryButton from '../Components/CategoryButton'
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
            <div className='flex justify-center h-full'>
              <section className='w-2/5 h-full flex justify-center '>
                <Title/>
                <div className='md:flex fixed  bottom-10 '>
                  <Inquiry/>
                </div> 
              </section>
              <section className='w-3/5 h-full'>
                <CategoryButton/>
              </section>
            </div>
          </>
        )}
    </div>
    

  )
}

export default Home