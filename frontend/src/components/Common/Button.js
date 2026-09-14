import React from "react";

function Button({ children, className="" }){
    return(
        <button
            className="dark:bg-white dark:text-black text-white bg-black rounded-lg"
        >
            {children}
        </button>
    );
}

export default Button;