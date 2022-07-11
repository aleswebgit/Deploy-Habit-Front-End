import SectionsComponent from '../Components/SectionsComponent'


import Navbar from '../Components/Navbar.jsx'




const Section = () => {
  return (
    <>
      <Navbar />
      <h1>Nutrición</h1>
      <SectionsComponent text='Subapartado uno'/>
      <SectionsComponent text='Subapartadp dos '/>
      <SectionsComponent text='Subapartadp tres'/>
      <SectionsComponent text='Subapartadp cuatro'/>
      <SectionsComponent text='Subapartadp cinco'/>
    </>

  )
}

export default Section