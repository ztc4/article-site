"use client"
import React from "react";

function Button({data, handleClick}) {
    return ( 
        <button 
        name={data.name} 
        className={`submit-button hover:drop-shadow`}
       onClick={handleClick} 
       disabled={data.disabled}
        >
            {data.text}
        </button>
     );
}

export default Button;