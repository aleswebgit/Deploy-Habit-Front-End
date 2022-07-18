const Inquiry = () => {
  return (
    <ul className="pl-0 mb-0">
      <li className='bg-[#E57A56] text-center lg:rounded-t-3xl pb-4'>
        <div className='lg:w-[35vw] lg:h-[700px] lg:mb-[-600px] lg:hover:mb-[-300px] duration-300'>
          <p className='text-white text-3xl pt-10 font-extrabold'>HACER CONSULTA</p>
          <div className='bg-[#F8D1B4] lg:mt-20 mx-3 p-5 rounded-3xl text-center space-y-4'>
            <p className='text-lg text-[#BC4E2A]'>
                Si tienes alguna duda, y quieres la respuesta de forma personalizada,
                escríbenos dándole al botón.
            </p>
            <a 
              href="mailto:yourwebsolutions3000@gmail.com?subject=Consulta web Habits+" 
              className='bg-white rounded-3xl text-xl font-bold py-1 px-10 text-[#BC4E2A]'>
                hacer consulta
            </a>
          </div>
        </div>
      </li>
    </ul>
  )
}
  
export default Inquiry
/* 
          <div className='bg-[#F8D1B4] lg:mt-20 mx-4 p-5 rounded-3xl text-center space-y-4'>
            <p className='text-lg text-[#BC4E2A]'>
                Si tienes alguna duda, y quieres la respuesta de forma personalizada,
                escríbenos dándole al botón.
            </p>
            <div>
              <a 
                href="mailto:yourwebsolutions3000@gmail.com?subject=Consulta web Habits+" 
                className='bg-white rounded-3xl text-xl font-bold py-1 px-12 text-[#BC4E2A]'>
                hacer consulta
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
*/