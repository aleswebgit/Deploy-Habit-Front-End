import { useEffect, useState } from 'react'
import CategoryButton from '../Components/CategoryButton'
import Landing from '../Views/Landing'
import Advice from '../Components/Advice'
import Navbar from '../Components/Navbar'


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
            <h1 className='flex justify-center text-[#BC4E2A]'>Sobre el proyecto</h1>
            <div className="bg-[#E57A56] rounded-3xl p-9 text-[#FDF6EC] font-medium space-y-4">
              <p className="text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet, blandit xfdvds molestie viverra nisi. Tellus nam lacus csdcametus, a, enim habitasse neque ut aliquam. Adipiscing tempu askcbaskcb
              </p>
              <a href="" className="block mx-auto w-fit">
                Ver mas...
              </a>
            </div>
            <CategoryButton/>
            <Advice/>
          </>
        )}
    </div>
    

  )
}

export default Home