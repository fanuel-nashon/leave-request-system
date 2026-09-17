import React, { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Input from "./Input";


const PasswordInput=({name, id, placeholder,...rest})=>{
    const [visible, setVisible]=useState(false);

    return(
        <div className="relative">
            <Input 
                type={visible ? "text" : "password"}
                name={name}
                id={id}
                placeholder={placeholder}
                className="pr-9"
                {...rest}
            />
            <button
                type="button"
                onClick={()=>setVisible((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                aria-label={visible ? "Hide password" : "Show password"}
            >
                {visible ? <IconEyeOff size={18} /> : <IconEye size={18} />}
            </button>
        </div>
    );
};

export default PasswordInput;