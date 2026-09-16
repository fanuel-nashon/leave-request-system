import React from "react"
import Icons from "../../Common/CalendarIcon";

const h6Style = 'dark:text-white font-semibold mt-3 mb-1';

const LoginPage=()=>{
    return(
        <>
            <div className="flex justify-center align-items-center bg-black dark:border-sm border-white">
                <Icons className="text-center" type="calendar" />
                <h6 className={`text-center ${h6Style}`}>Leave Request System</h6>
                <p className="text-center dark:text-gray-200">Sign in to manage your leave</p>

                <form id="loginForm">

                </form>
            </div>
        </>
    );
}

export default LoginPage