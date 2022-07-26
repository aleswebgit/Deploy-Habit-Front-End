import { useEffect, useRef, useState } from 'react'
import axios from '../api/axios'

function UserRegisterForm(){
  const errRef = useRef()
  const nameRef = useRef()
  // const surnameRef = useRef()
  // const ageRef = useRef()
  // const addressRef = useRef()
  // const cityRef = useRef()
  // const provinceRef = useRef()
  // const zipRef = useRef()
  // const nationalityRef = useRef()
  // const phoneRef = useRef()
  // const sexRef = useRef()

  
  const [errorMsg, setErrMsg] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [zip, setZip] = useState('')
  const [nationality, setNationality] = useState('')
  const [phone, setPhone] = useState('')
  const [sex, setSex] = useState('')
  
  useEffect(()=>{
    nameRef.current.focus()
  },[])
  
  useEffect(()=>{
    setErrMsg('')
  },[ name, surname, age, address, city, province, zip, nationality, phone, sex])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('/api/auth/signup', 
        JSON.stringify({
          name,
          surname,
          age,
          address,
          city,
          province,
          zip,
          nationality,
          phone,
          sex
        })
      ).then(response => {
        console.log(response)
      })
      setName('')
      setSurname('')
      setAge('')
      setAddress('')
      setCity('')
      setProvince('')
      setZip('')
      setNationality('')
      setPhone('')
      setSex('')
      // go to home page after login
      // window.location.href = '/home'
    } catch (error) {
      console.log(error.response)
    }
  }

  return(
    <form className="p-4 my-14 bg-[#F8D1B4] w-[313px] mx-auto rounded-3xl" onSubmit={handleSubmit}>
      <h1 className="flex p-2 text-2xl items-center justify-center text-center text-[#BC4E2A] uppercase">AYÚDANOS A SABER MÁS DE TÍ</h1>
      <label className="w-full">
        <input
          ref={nameRef}
          name="name"
          type="text"
          className="mt-6 rounded-full text-center w-full p-2"
          placeholder="Nombre"/>
      </label>
      <label className="w-full">
        <input
          name="surname"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Apellidos"/>
      </label>
      <label className="w-full">
        <input
          name="age"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Edad"/>
      </label>
      <label className="w-full">
        <input
          name="address"
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
          name="province"
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
          name="nationality"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Nacionalidad"/>
      </label>
      <label className="w-full">
        <input
          name="phone"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          placeholder="Teléfono"/>
      </label>
      <label className="w-full">
        <select
          name="sex"
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
      <p ref={errRef} className={errorMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errorMsg}</p>
      {/* <div>
      </div> */}
    </form>
  )
}

export default UserRegisterForm