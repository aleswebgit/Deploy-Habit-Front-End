import React from 'react';
import { useNavigate } from 'react-router-dom';
import Picprofile from '../media/picprofile.png';

function LoginForm(){

    const navigate = useNavigate();

    return(
        <form  className=" bg-[#F8D1B4] w-80 h-[406px] rounded-[52px] m-auto ">
            <img
                className="flex m-auto"
				src = {Picprofile}
				alt = 'Picprofile'/>
            <div>
                <input 
                    className="rounded-3xl text-center p-3 px-11 m-auto flex my-2"
                    type= 'text' 
                    id='name' 
                    name='name' 
                    placeholder = 'username'
                />
            </div>

            <div>
                <input 
                    className="rounded-3xl p-3 text-center px-11 m-auto flex my-2"
                    type = 'email' 
                    id='name' 
                    name='name' 
                    placeholder = 'email'
                /> 
            </div>
                <button 
                    class="bg-[#D45C33] rounded-3xl text-center text-white px-9 p-2 m-auto flex"
                    type='submit' 
                    onClick={() => navigate("/home")}>
                    Login
                    </button>
        </form>
    
    );
    
}

export default LoginForm;

