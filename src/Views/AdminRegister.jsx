import React from 'react'
import Navbar from '../Components/Navbar.jsx'



function AdminRegister(){
  return(
    <>
      <Navbar/>
      <div className = 'mt-20'>
        <div className="m-auto w-[313px] rounded-3xl bg-[#F8D1B4]">
          <div className="p-6">
            <h1 className="flex items-center justify-center p-14 px-2 text-center text-3xl font-bold text-[#BC4E2A]"> Nueva alta en el sistema</h1>
            <form>
              <label className="block w-[269px]">
                <input name="name" type="text" className=" w-full rounded-full p-2 text-center" placeholder="Email" />
              </label>
              <label className="w-[269px]">
                <input name="address1" type="text" className="mt-3 w-full rounded-full p-2 text-center" placeholder="Contraseña" />
              </label>
              <div className="m-6 flex justify-center">
                <button type="submit" className="h-10 rounded-full bg-[#BC4E2A] px-5 text-white">Enviar</button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
        <p className="flex items-center justify-center py-4 px-12 text-center text-[#BC4E2A]"> Asigna email y contraseña para registrar a una nueva persona </p>
      </div>
    </>
  )
}

export default AdminRegister