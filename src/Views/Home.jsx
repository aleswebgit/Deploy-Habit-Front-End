import { useEffect, useState } from 'react'
import Category from '../Components/Category'
import Landing from '../Views/Landing'


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
          This comes from HOME!
            <Category/>
          </>
        )}
    </div>
    

  )
}

export default Home