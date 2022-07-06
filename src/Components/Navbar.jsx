import {CgMenuBoxed} from 'react-icons/cg';
import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import React,{useState} from 'react';

function Navbar(){
    
    
    function NavBar(){
    
                // const navigate = useNavigate();
                const [dropdown, setDropdown] = useState(false);
        
                const openCloseDropdown = () => {
                    setDropdown(!dropdown);
                }
    
        return(
    
            <div className='navbar-container'>
                <Dropdown isOpen = {dropdown} toggle = {openCloseDropdown} >
                    <DropdownToggle >
                        <CgMenuBoxed />
                    </DropdownToggle >
    
                    <DropdownMenu>
                        <DropdownItem> Home </DropdownItem>
                        <DropdownItem > Añadir botones </DropdownItem>
                        <DropdownItem> Añadir contactos </DropdownItem>
                    </DropdownMenu>
    
                </Dropdown>
                <a href="Login">
                    <img className="profileIcon" src={require('../media/profileIcon.png')} alt="profileIcon" />
                </a>
            </div>
        );
    }
    
    export default NavBar;
}

exporlt default Navbar;