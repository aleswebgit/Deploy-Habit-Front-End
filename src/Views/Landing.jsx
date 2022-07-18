import landingPic from '../media/img/landingPic.png'

function Landing(){
  return(
    <div className = " h-screen flex justify-center items-center ">
      <img 
        src={landingPic} 
        alt="landing"
        className = 'm-auto w-[20%] flex self-center ' />
    </div>
  )
}




export default Landing