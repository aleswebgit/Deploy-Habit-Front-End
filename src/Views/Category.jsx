import SectionButton from '../Components/SectionButton'
import Navbar from '../Components/Navbar'

const Category = () => {
  return (
    <>
      <Navbar/>
      <h1>Título de sección</h1>
      <SectionButton text='Subapartado uno'/>
      <SectionButton text='Subapartadp dos '/>
      <SectionButton text='Subapartadp tres'/>
      <SectionButton text='Subapartadp cuatro'/>
      <SectionButton text='Subapartadp cinco'/>
    </>
  )
}

export default Category