import landingPic from '../media/img/landingPic.png'
import React, { useEffect, useState } from 'react'
import LoginForm from '../Components/LoginForm'


function Landing(){

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },3000)
  },[])



  return(
    <>
      {loading ? 
        <img
          src={landingPic} 
          alt='landing'
          className = 'landing-pic'
          loading = {loading}/> 
        : <LoginForm/>}
    </>
  )
}
  




export default Landing




