import {CgMenuBoxed} from 'react-icons/cg'
import {CgUserAdd} from 'react-icons/cg'
import { BiUserCircle } from 'react-icons/bi'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar(){

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
        <DropdownMenu>
          <DropdownItem onClick={() => navigate('/')}>Página principal</DropdownItem>
          <DropdownItem onClick={() => navigate('/admin-register')}>Alta nueva en el sistema</DropdownItem>
          <DropdownItem onClick={() => navigate('/category/:1')}>Sueño</DropdownItem>
          <DropdownItem onClick={() => navigate('/category/:2')}>Nutrición</DropdownItem>
          <DropdownItem onClick={() => navigate('/category/:3')}>Deporte</DropdownItem>
          <DropdownItem onClick={() => navigate('/category/:4')}>Salud Mental</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <CgUserAdd type='button' className='text-[#BC4E2A] display-block h-[48px] w-[48px]' onClick={() => navigate('/admin-register')}  />
      <Dropdown isOpen = {dropdownR} toggle = {openCloseDropdownR} className = 'border-transparent ' >
        <DropdownToggle className = 'bg-transparent border-0 '>
          <BiUserCircle className = 'text-[#BC4E2A] display-block h-[48px] w-[48px] '/>
        </DropdownToggle >
        <DropdownMenu>
          <DropdownItem  onClick={() => navigate('/login')}>Conectar</DropdownItem>
          <DropdownItem  onClick={() => navigate('/profile/:id')}>Mi perfil</DropdownItem>
          <DropdownItem  onClick={() => navigate('/')}>Desconectar</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  )
}

export default Navbar