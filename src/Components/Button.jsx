import React from 'react'

function Button({text, manageButton}){
    return(
        <button 
        onClick = { manageButton }>
            {text}
        </button>
    );
}

export default Button