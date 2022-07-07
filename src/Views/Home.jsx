import { useEffect, useState } from 'react'
import Category from '../Components/Category'
import Landing from '../Views/Landing'
import Advice from '../Components/Advice'


const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
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
            <Category/>
            <Advice/>
          </>
        )}
    </div>
    

  )
}

export default Home