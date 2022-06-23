import React from 'react';
import { useNavigate } from 'react-router-dom';
import Picprofile from '../media/picprofile.png';

function LoginForm(){

    const navigate = useNavigate();

    return(
        <form>
            <img
				src = {Picprofile}
				alt = 'Picprofile'/>
            <div>
                <input 
                    type= 'text' 
                    id='name' 
                    name='name' 
                    placeholder = 'username'
                />
            </div>

            <div>
                <input 
                    type = 'email' 
                    id='name' 
                    name='name' 
                    placeholder = 'email'
                /> 
            </div>
                <button 
                    type='submit' 
                    onClick={() => navigate("/home")}>
                    Login
                    </button>
        </form>
    
    );
    
}

export default LoginForm;

