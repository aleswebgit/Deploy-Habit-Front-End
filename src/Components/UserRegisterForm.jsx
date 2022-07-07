function UserRegisterForm(){
  return(
    <div className='mt-14 mb-14'>
      <div className="bg-[#F8D1B4] w-[313px] m-auto rounded-3xl">
        <div className="p-4">
          <h1 className="flex p-2 text-3xl items-center justify-center text-center text-[#BC4E2A]  ">AYÚDANOS A SABER MÁS DE TÍ</h1>
          <form
          >
            <label className="block w-[269px]">
              <input
                name="name"
                type="text"
                className="mt-6 rounded-full text-center w-full p-2"
                placeholder="Nombre"/>
        
            </label>
            <label className="w-[269px]">
              <input
                name="address1"
                type="text"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder="Apellidos"/>
            </label>
            <label className="w-[269px]">
              <input
                name="address1"
                type="text"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder="Edad"/>
            </label>
            <label className="w-[269px]">
              <input
                name="address2"
                type="text"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder="Dirección"/>
            </label>
            <label className="w-[269px]">
              <input
                name="city"
                type="text"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder="Ciudad"/>
            </label>
            <label className="w-[269px]">
              <input
                name="state"
                type="text"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder="Provicia"/>
            </label>
            <label className="w-[269px]">
              <input
                name="zip"
                type="text"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder="Código Postal"/>
            </label>
            <label className="w-[269px]">
              <input
                name="country"
                type="text"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder="Nacionalidad"/>
            </label>
            <label className="w-[269px]">
              <input
                name="telephone"
                type="text"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder="Teléfono"/>
            </label>
            <label className="w-[269px]">
              <select
                name="message"
                className="mt-3 rounded-full text-center w-full p-2"
                placeholder=" Me identifico como..">
                <option value="me identifico como..." className= "placeholder:text">Me identifico como..</option>
                <option value="asf">hombre</option>
                <option value="asf">mujer</option>
                <option value="asf">no binarix</option>
                <option value="asf">otro</option>
                <option value="asf">prefiero no decirlo</option>
              </select>
            </label>
            <div className="m-6 flex justify-center">
              <button
                type="submit"
                className="h-10 px-5 bg-[#BC4E2A] rounded-full text-white">
          Guardar
              </button>
            </div>
            <div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default UserRegisterForm