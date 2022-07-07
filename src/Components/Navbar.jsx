import {CgMenuBoxed} from 'react-icons/cg';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';

function Navbar(){

    const [dropdown, setDropdown] = useState(false);

    const openCloseDropdown = () => {
        setDropdown(!dropdown);
    }
    
        return(
    
            <nav className='bg-[#FDF6EC] w-full flex relative justify-between items-center mx-auto px-8 h-20 '>
                <Dropdown isOpen = {dropdown} toggle = {openCloseDropdown} >
                    <DropdownToggle className = 'bg-transparent border:none'>
                        <CgMenuBoxed className = 'display-block h-[48px] w-[48px]'/>
                    </DropdownToggle >
    
                    <DropdownMenu>
                        <DropdownItem> Home </DropdownItem>
                        <DropdownItem > Registrar Nuevo </DropdownItem>
                        <DropdownItem> Categorías </DropdownItem>
                        <DropdownItem> Mi perfil </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <button type="button" class="py-2 px-3 hover:underline rounded-full relative ">
                    <div class="flex items-center h-5">
                        <p>Registro nuevo</p>
                    </div>
                </button>
                <a href="Login" className = 'flex mr-4 items-center'>
                    <img className="h-[48px] w-[48px]" src={require('../media/picprofile.png')} alt="profileIcon" />
                </a>
            </nav>
        );
    }

export default Navbar;