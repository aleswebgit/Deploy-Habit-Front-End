import React from 'react'

function AdminRegister(){
  return(
    <div>

      <div className="m-8 mx-44 w-[313px] rounded-3xl bg-[#F8D1B4]">
        <div className="p-6">
          <h1 className="z-0 flex items-center justify-center p-5 px-2 text-center text-3xl font-bold text-[#BC4E2A]">Registro nuevo usuarix</h1>
          <h1 className="z-0 flex items-center justify-center p-5 px-2 text-center text-lg font-regular text-[#BC4E2A]"> Asigna email y contraseña en la nueva alta en el sistema </h1>
          <form>
            <label className="block w-[269px]">
              <input name="name" type="text" className="mt-6 w-full rounded-full p-2 text-center" placeholder="Email" />
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
    </div>)
}

export default AdminRegister