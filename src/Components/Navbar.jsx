import {CgMenuBoxed} from 'react-icons/cg'
import {CgUserAdd} from 'react-icons/cg'
import { BiUserCircle } from 'react-icons/bi'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React,{useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

function Navbar(){
  const { idUser } = useContext(AuthContext)
  // const [idUser, setIdUser] = useState('')
  // const [idUser, setIdUser] = useState('')
  const [successfullyLogin, setSuccessfullyLogin] = useState(false)
  // get idUser from cookies if exist
  // let cookieUser = ''
  // const [cookieUser, setCookieUser] = useState('')

  /* const getCookies = async () => {

    cookieUser = await Cookies.get('idUser')
    let newUser = cookieUser.slice(0, cookieUser.length - 1)
    newUser = newUser.slice(3, newUser.length)

    setIdUser(newUser)
  } */

  /* useEffect(() => {
    console.log('hola')
    console.log({cookieUser})
    if (cookieUser) {
      console.log('a dins')
      console.log({cookieUser})
      let newUser = cookieUser.slice(0, cookieUser.length - 1)
      newUser = newUser.slice(3, newUser.length)
      console.log({newUser})
  
      setIdUser(newUser)
    }
  }, [cookieUser]) */
  
  /* useEffect(()=>{
    console.log(successfullyLogin)
    if(successfullyLogin){
      console.log('successfullyLogin useEffect for set cookieUser')
      setCookieUser(Cookies.get('idUser'))
    }
  }, [successfullyLogin]) */

  useEffect(()=>{
    let localStorageUser = localStorage.getItem('successfullyLogin')
    if(localStorageUser){
      setSuccessfullyLogin(localStorageUser)
    }
    console.log('useEffect for set successfullyLogin')
  }, [successfullyLogin])

  /* useEffect(()=>{
  // Load the todos on mount
    const getLocal = localStorage.getItem('successfullyLogin')
    if (getLocal) {
      setSuccessfullyLogin(getLocal)
    }
    // Respond to the `storage` event ?????
    function successfullyLogin() {
      // if (event.key === 'todos') {
      //   const todos = JSON.parse(event.newValue)
      //   setTodos(todos)
      // }
      getCookies()
    }
    // Hook up the event handler
    window.addEventListener('storage', successfullyLogin)
    return () => {
    // Remove the handler when the component unmounts
      window.removeEventListener('storage', successfullyLogin)
    }
  }, []) */

  // useEffect(()=>{
  // let getCookies = Cookies.get('idUser')
  // if(getCookies){
  //   setCookieUser(Cookies.get('idUser'))
  //   let newUser = cookieUser.slice(0, cookieUser.length - 1)
  //   newUser = newUser.slice(3, newUser.length)
  //   console.log({newUser})
  //   console.log(Cookies.get('idUser'))

  //   setIdUser(newUser)
  // }
  // },[idUser])

  const navigate = useNavigate()

  const [dropdownL, setDropdownL] = useState(false)
  
  const openCloseDropdownL = () => {
    setDropdownL(!dropdownL)
  }


  const [dropdownR, setDropdownR] = useState(false)

  const openCloseDropdownR = () => {
    setDropdownR(!dropdownR)
  }


  return(
    
    <nav className='w-full flex relative justify-between items-center mx-auto px-8 h-20 '>
      <Dropdown isOpen = {dropdownL} toggle = {openCloseDropdownL} className = 'border-transparent ' >
        <DropdownToggle className = 'bg-transparent border-0 '>
          <CgMenuBoxed className = 'text-[#BC4E2A] display-block h-[48px] w-[48px] '/>
        </DropdownToggle >
    
        <DropdownMenu aria-expanded aria-label='menu desplegable'>
          <DropdownItem aria-level={1} onClick={() => navigate('/home')}>Página principal</DropdownItem>
          <DropdownItem aria-level={2} onClick={() => navigate('/admin-register')}>Alta nueva en el sistema</DropdownItem>
          <DropdownItem aria-level={3} onClick={() => navigate('/category/1')}>Sueño</DropdownItem>
          <DropdownItem aria-level={4} onClick={() => navigate('/category/2')}>Nutrición</DropdownItem>
          <DropdownItem aria-level={5} onClick={() => navigate('/category/3')}>Ejercicio físico</DropdownItem>
          <DropdownItem aria-level={6} onClick={() => navigate('/category/4')}>Salud Mental</DropdownItem>
          <DropdownItem aria-level={7} onClick={() => navigate('/about-us')}>Quiénes somos</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <CgUserAdd role="button" aria-label='añadir un usuario' type='button' className='text-[#BC4E2A] display-block h-[48px] w-[48px]' onClick={() => navigate('/admin-register')}  />
      <Dropdown isOpen = {dropdownR} toggle = {openCloseDropdownR} className = 'border-transparent ' >
        <DropdownToggle className = 'bg-transparent border-0 '>
          <BiUserCircle aria-label='icono de usuario' className = 'text-[#BC4E2A] display-block h-[48px] w-[48px] '/>
        </DropdownToggle >
        <DropdownMenu aria-expanded>
          {/* <DropdownItem aria-level={1} onClick={() => navigate('/login')}>Conectar</DropdownItem> */}
          {/* {idUser && <DropdownItem aria-level={2} onClick={() => navigate(`/profile/${idUser}`)}>Mi perfil</DropdownItem>} */}
          {successfullyLogin 
            ? <DropdownItem aria-level={2} onClick={() => navigate(`/profile/${idUser}`)}>Mi perfil</DropdownItem>
            : <DropdownItem aria-level={2} onClick={() => navigate('/login')}>Conectar</DropdownItem> 
          }
          <DropdownItem aria-level={3} onClick={() => navigate('/')}>Desconectar</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  )
}

export default Navbar