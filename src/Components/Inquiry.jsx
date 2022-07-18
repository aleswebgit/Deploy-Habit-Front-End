const Inquiry = () => {
  return (
    <ul>
      <li className='bg-[#E57A56] text-center rounded-t-3xl'>
        <div className=' w-[500px] h-[700px] mb-[-600px] hover:mb-[-300px] duration-300'>
          <p className='text-white text-3xl pt-10 font-extrabold'>HACER CONSULTA</p>
          <div className='bg-[#F8D1B4] mt-20 mr-4 ml-4 p-5  rounded-3xl text-center space-y-4'>
            <p className='text-lg text-[#BC4E2A]'>
                Si tienes alguna duda, y quieres la respuesta de forma personalizada,
                escríbenos dándole al botón.
            </p>
            <div>
              <a className=' bg-white rounded-3xl text-xl font-bold py-1 px-12 text-[#BC4E2A]'>
                <button>
                    hacer consulta
                </button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}
  
export default Inquiry