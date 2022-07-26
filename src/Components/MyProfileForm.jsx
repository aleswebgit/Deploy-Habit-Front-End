import { useEffect, useRef, useState } from 'react'
import axios from '../api/axios'

function MyProfileForm(){
  const [read, setRead] = useState(true)
  // const errRef = useRef()
  const nameRef = useRef(null)
  const surnameRef = useRef(null)
  const ageRef = useRef(null)
  const addressRef = useRef(null)
  const cityRef = useRef(null)
  const provinceRef = useRef(null)
  const zipRef = useRef(null)
  const nationalityRef = useRef(null)
  const phoneRef = useRef(null)
  const sexRef = useRef(null)

  const [idUser, setIdUser] = useState('')
  const [successfullyLogin, setSuccessfullyLogin] = useState(false)
  const [userData, setUserData] = useState({})

  // const [errorMsg, setErrMsg] = useState('')
  // const [name, setName] = useState('')
  // const [surname, setSurname] = useState('')
  // const [age, setAge] = useState('')
  // const [address, setAddress] = useState('')
  // const [city, setCity] = useState('')
  // const [province, setProvince] = useState('')
  // const [zip, setZip] = useState('')
  // const [nationality, setNationality] = useState('')
  // const [phone, setPhone] = useState('')
  // const [sex, setSex] = useState('')

  const handleEditOption = (e) => {
    e.preventDefault()
    setRead(false)
  }

  const updateProfile = async (e) => {
    e.preventDefault()
    setRead(true)

    try {
      console.log('userId', idUser)
      const dataUpdate = {
        name: nameRef.current?.value,
        surname: surnameRef.current?.value,
        age: ageRef.current?.value,
        address: addressRef.current?.value,
        city: cityRef.current?.value,
        province: provinceRef.current?.value,
        zip: zipRef.current?.value,
        nationality: nationalityRef.current?.value,
        phone: phoneRef.current?.value,
        sex: sexRef.current?.value
      }
      await axios.put(`/users/${idUser}`,
        JSON.stringify(dataUpdate)
      ).then(response => {
        console.log(response)
      })
      // go to home page after login
      // window.location.href = '/home'
    } catch (error) {
      console.log('error en updateProfile')
      console.log(error.response)
    }
  }

  const getProfile = async () => {
    try {
      console.log('userId', idUser)
      await axios.get(`/users/${idUser}`).then(response => {
        console.log(response.data)
        setUserData(response.data)
      })
      /* .then(response => {
          nameRef.current.value != 'undefined' 
            ? nameRef.current.value = response.data.name 
            : nameRef.current.value = ''
          surnameRef.current.value != 'undefined' 
            ? surnameRef.current.value = response.data.surname 
            : surnameRef.current.value = ''
          ageRef.current.value != 'undefined'
            ? ageRef.current.value = response.data.age
            : ageRef.current.value = ''
          addressRef.current.value != 'undefined'
            ? addressRef.current.value = response.data.address
            : addressRef.current.value = ''
          cityRef.current.value != 'undefined'
            ? cityRef.current.value = response.data.city
            : cityRef.current.value = ''
          provinceRef.current.value != 'undefined'
            ? provinceRef.current.value = response.data.province
            : provinceRef.current.value = ''
          zipRef.current.value != 'undefined'
            ? zipRef.current.value = response.data.zip
            : zipRef.current.value = ''
          nationalityRef.current.value != 'undefined'
            ? nationalityRef.current.value = response.data.nationality
            : nationalityRef.current.value = ''
          phoneRef.current.value != 'undefined'
            ? phoneRef.current.value = response.data.phone
            : phoneRef.current.value = ''
          sexRef.current.value != 'undefined'
            ? sexRef.current.value = response.data.sex
            : sexRef.current.value = ''
          
          console.log('hoverDelay')
        }) */
    }  catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    nameRef.current.value != null 
      ? nameRef.current.value = userData.name
      : nameRef.current.value = ''
    surnameRef.current.value != null 
      ? surnameRef.current.value = userData.surname 
      : surnameRef.current.value = ''
    ageRef.current.value != null
      ? ageRef.current.value = userData.age
      : ageRef.current.value = ''
    addressRef.current.value != null
      ? addressRef.current.value = userData.address
      : addressRef.current.value = ''
    cityRef.current.value != null
      ? cityRef.current.value = userData.city
      : cityRef.current.value = ''
    provinceRef.current.value != null
      ? provinceRef.current.value = userData.province
      : provinceRef.current.value = ''
    zipRef.current.value != null
      ? zipRef.current.value = userData.zip
      : zipRef.current.value = ''
    nationalityRef.current.value != null
      ? nationalityRef.current.value = userData.nationality
      : nationalityRef.current.value = ''
    phoneRef.current.value != null
      ? phoneRef.current.value = userData.phone
      : phoneRef.current.value = ''
    sexRef.current.value != null
      ? sexRef.current.value = userData.sex
      : sexRef.current.value = ''
  }, [userData])

  useEffect(()=>{
    if (idUser !== '') {
      getProfile()
    }
  }, [idUser])

  useEffect(()=>{
    if (localStorage.getItem('idUser')) {
      let cookieUser = localStorage.getItem('idUser')
      setIdUser(cookieUser)
    }
  },[successfullyLogin])

  useEffect(()=>{
    let getLogin = localStorage.getItem('successfullyLogin')
    if (getLogin) {
      setSuccessfullyLogin(getLogin)
    }
  }, [])

  return(
    <form 
      onSubmit={(e) => updateProfile(e)}
      className="p-4 bg-[#F8D1B4] w-[313px] mx-auto rounded-3xl"
    >
      <h1 className="flex p-2 text-2xl items-center justify-center text-center text-[#BC4E2A] uppercase">Tus datos</h1>
      <label className="w-full">
        <input
          ref={nameRef}
          name="name"
          type="text"
          className="mt-6 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Nombre"/>
      </label>
      <label className="w-full">
        <input
          ref={surnameRef}
          name="surname"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Apellidos"/>
      </label>
      {/* <label className="w-full">
        <input

          name="email"
          type="email"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Email"/>
      </label> */}
      <label className="w-full">
        <input
          ref={ageRef}
          name="age"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Edad"/>
      </label>
      <label className="w-full">
        <input
          ref={addressRef}
          name="address"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Dirección"/>
      </label>
      <label className="w-full">
        <input
          ref={cityRef}
          name="city"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Ciudad"/>
      </label>
      <label className="w-full">
        <input
          ref={provinceRef}
          name="province"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Provicia"/>
      </label>
      <label className="w-full">
        <input
          ref={zipRef}
          name="zip"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Código Postal"/>
      </label>
      <label className="w-full">
        <input
          ref={nationalityRef}
          name="nationality"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Nacionalidad"/>
      </label>
      <label className="w-full">
        <input
          ref={phoneRef}
          name="phone"
          type="text"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder="Teléfono"/>
      </label>
      <label className="w-full">
        <select
          ref={sexRef}
          name="sex"
          className="mt-3 rounded-full text-center w-full p-2"
          readOnly={read}
          placeholder=" Me identifico como..">
          <option value="me identifico como..." className= "placeholder:text">Me identifico como..</option>
          <option value="h">hombre</option>
          <option value="m">mujer</option>
          <option value="nb">no binarix</option>
          <option value="o">otro</option>
          <option value="no">prefiero no decirlo</option>
        </select>
      </label>
      <div className="m-6 flex justify-center">
        { read 
          ? (<button
            className="h-10 px-5 bg-[#BC4E2A] rounded-full text-white"
            onClick={handleEditOption}
          >
          Editar
          </button>) 
          : <button className="h-10 px-5 bg-[#BC4E2A] text-white rounded-full">Guardar</button> }
      </div>
      {/* <p ref={errRef} className={errorMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errorMsg}</p> */}
      {/* <div>
      </div> */}
    </form>
  )
}
  
export default MyProfileForm