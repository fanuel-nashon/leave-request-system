import React from "react";

const Input=({type, name, id, placeholder, className="", ...rest})=>{
    return(
        <input 
            className={`border border-white rounded px-2 py-1 text-white w-full ${className}`}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder} 
            {...rest}  
        />
    );
}

export default Input