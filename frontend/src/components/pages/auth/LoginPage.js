import React, { useState } from "react"
import Icons from "../../Common/CalendarIcon";
import Input from "../../Common/Input";
import PasswordInput from "../../Common/PasswordInput";
import Button from "../../Common/Button";

const h6Style = 'dark:text-white font-semibold mt-3 mb-1';

const LoginPage=()=>{
    const [name, setName]=useState('');
    return(
        <>
            <div className="flex justify-center items-center bg-black min-h-screen">
                <div className="px-12 py-12 rounded-lg border border-white">
                    <Icons className="mx-auto" type="calendar" />
                    <h6 className={`text-center ${h6Style}`}>Leave Request System</h6>
                    <p className="text-center dark:text-gray-200">Sign in to manage your leave</p>
                    
                    <form className="py-6" id="loginForm">
                        <div className="flex flex-col gap-1 mb-3">
                            <label className="text-white" htmlFor="name">Name</label>
                            <Input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                onChange={(e)=>setName(e.target.value)}
                                required                           
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-white" htmlFor="password">Password</label>
                            <PasswordInput name="password" id="password" placeholder="Enter your password" required />
                        </div>
                        <div className="flex justify-center mb-3">
                            <label className="text-sm dark:text-white">
                                <input className="mx-2" type="checkbox" name="remember-me" />
                                Remember me
                            </label>
                            <p className="text-sm dark:text-white"><a href="#">Forgot Password?</a></p>
                        </div>
                        <Button
                            className="w-full px-2 py-2"
                            type="submit"
                        >
                            Sign In
                        </Button>
                        <p className="dark:text-white">Don't have an account?
                            <a href="#">Create One</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage