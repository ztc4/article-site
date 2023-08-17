import React from "react";
function Input({data, handleChange, icon}) {
    return ( 
        <div className="input">
            <div>{icon && icon}</div>
            <input 
            type={data.type}
            placeholder={data.placeholder}
            onChange={handleChange}
            name={data.name}
            id={data.id}
            value={data.value}></input>


        </div>
     );
}

export default Input;