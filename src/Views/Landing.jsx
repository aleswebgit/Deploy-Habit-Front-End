import landingPic from '../media/img/landingPic.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function Landing(){

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }, [])
 

  return(
    <div className = " h-screen flex justify-center items-center flex-col">
      <img 
        src={landingPic} 
        alt="landing logo from caritas"
        className = 'w-[80%] sm:w-[20%] flex self-center ' />
      <svg className="w-[10%] h-[10%] sm:w-[5%] mt-4 sm:h-[5%] color-orange"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" calcMode="linear" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite" ></animateTransform></path></svg>
    </div>
  )
}




export default Landing