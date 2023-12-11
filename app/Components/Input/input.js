import React from "react";
function Input({data, handleChange, icon}) {
    return ( 
        <div className="input rounded-lg font-sloth-semibold  border-purple  border-2 overflow-hidden">
            <div>{icon && icon}</div>
            <input 
            title={data.title || "red"}
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