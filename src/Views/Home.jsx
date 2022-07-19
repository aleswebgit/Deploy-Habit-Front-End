
import CategoryData from '../Components/CategoryData'
import Inquiry from '../Components/Inquiry'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'


const Home = () => {
  

  return (
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
  )
}

export default Home