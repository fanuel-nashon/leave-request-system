import React from "react";
import {twMerge} from "tailwind-merge";

function Button({ children, className="" }){
    return(
        <button
            className={twMerge("dark:bg-white dark:text-black text-white bg-black rounded-lg", className)}
        >
            {children}
        </button>
    );
}

export default Button;