function UserRegisterForm(){
  return(
    <form className="p-4 my-14 bg-[#F8D1B4] w-[313px] mx-auto rounded-3xl">
      <h1 className="flex p-2 text-2xl items-center justify-center text-center text-[#BC4E2A] uppercase">AYÚDANOS A SABER MÁS DE TÍ</h1>
      <label className="w-full">
        <input
          name="name"
          type="text"
          className="mt-6 rounded-full text-center w-full p-2"
          placeholder="Nombre"/>
      </label>
      <label className="w-full">
        <input
          name="address1"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Apellidos"/>
      </label>
      <label className="w-full">
        <input
          name="address1"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Edad"/>
      </label>
      <label className="w-full">
        <input
          name="address2"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Dirección"/>
      </label>
      <label className="w-full">
        <input
          name="city"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Ciudad"/>
      </label>
      <label className="w-full">
        <input
          name="state"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Provicia"/>
      </label>
      <label className="w-full">
        <input
          name="zip"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Código Postal"/>
      </label>
      <label className="w-full">
        <input
          name="country"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Nacionalidad"/>
      </label>
      <label className="w-full">
        <input
          name="telephone"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Teléfono"/>
      </label>
      <label className="w-full">
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
  )
}

export default UserRegisterForm