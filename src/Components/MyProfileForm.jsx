import { useState } from 'react'

function MyProfileForm(){
  const [read, setRead] = useState(true)

  const handleEditOption = (e) => {
    e.preventDefault()
    setRead(!read)
  }

  return(
    <form className="p-4 bg-[#F8D1B4] w-[313px] mx-auto rounded-3xl">
      <h1 className="flex p-2 text-2xl items-center justify-center text-center text-[#BC4E2A] uppercase">Actualiza tus datos</h1>
      <label className="w-full">
        <input
          name="name"
          type="text"
          className="mt-6 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Nombre"/>
      </label>
      <label className="w-full">
        <input
          name="address1"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Apellidos"/>
      </label>
      <label className="w-full">
        <input
          name="address1"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Edad"/>
      </label>
      <label className="w-full">
        <input
          name="address2"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Dirección"/>
      </label>
      <label className="w-full">
        <input
          name="city"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Ciudad"/>
      </label>
      <label className="w-full">
        <input
          name="state"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Provicia"/>
      </label>
      <label className="w-full">
        <input
          name="zip"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Código Postal"/>
      </label>
      <label className="w-full">
        <input
          name="country"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Nacionalidad"/>
      </label>
      <label className="w-full">
        <input
          name="telephone"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Teléfono"/>
      </label>
      <label className="w-full">
        <select
          name="message"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
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
          className="h-10 px-5 bg-[#BC4E2A] rounded-full text-white"
          onClick={handleEditOption}
        >
          Editar
        </button>
      </div>
      <div>
      </div>
    </form>
  )
}
  
export default MyProfileForm