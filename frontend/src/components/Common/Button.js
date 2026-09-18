import React from "react";
import {twMerge} from "tailwind-merge";

function Button({ onClick, children, className="",disabled="" }){
    return(
        <button
            className={twMerge("dark:bg-white dark:text-black text-white bg-black rounded-lg", className)}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;