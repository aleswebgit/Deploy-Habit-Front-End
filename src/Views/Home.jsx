
import Category from '../Components/Category'
import Advice from '../Components/Advice'
import Navbar from '../Components/Navbar.jsx'

function Home() {
  
  return (
    <>
      <Navbar/>
      <div>
        <Category/>
        <Advice/>
      </div>
    </>

  )
}

export default Home