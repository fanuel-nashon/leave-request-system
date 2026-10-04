import React from "react";
import Icons from "../Common/CalendarIcon";

const ForgotPassword=()=>{
    return(
        <div className="flex justify-center items-center bg-black min-h-screen">
            <div className="px-8 py-8 rounded-xl border border-gray-800 w-[380px]">
                <Icons type="forgot-password" />

            </div>
        </div>
    );
}

export default ForgotPassword;