import React, { useState } from "react"
import Icons from "../Common/CalendarIcon";
import Input from "../Common/Input";
import PasswordInput from "../Common/PasswordInput";
import Button from "../Common/Button";
import { login } from "../../../services/api";
import { useNavigate } from "react-router-dom";

const h6Style = 'dark:text-white font-semibold mt-3 mb-1';

const LoginPage=()=>{
    const [name, setName]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState(false);
    const [isSubmitting,setIsSubmitting]=useState(false);
    const navigate = useNavigate();

    const handleLogin=async(e)=>{
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        try{
            const response = await login(name, password);
            const token = response.data.data.token;
            localStorage.setItem('token',token);
            setSuccess(true);
            setName('');
            setPassword('');
            navigate('/dashboard');
        }
        catch(err){        
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setIsSubmitting(false);
        }
    }
    return(
        <>
            <div className="flex justify-center items-center bg-black min-h-screen">
                <div className="px-8 py-8 rounded-xl bg-gray-900 border border-gray-800 w-[380px]">
                    <Icons className="mx-auto !bg-blue-600" color="text-white" type="calendar" />
                    <h6 className={`text-center ${h6Style}`}>Leave Request System</h6>
                    <p className="text-center dark:text-gray-200">Sign in to manage your leave</p>
                    <form className="py-6" id="loginForm" onSubmit={handleLogin}>
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
                            <PasswordInput name="password" id="password" placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="flex items-center gap-2 text-sm dark:text-white">
                                <input type="checkbox" name="remember-me" />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                        </div>

                        <Button
                            className="w-full py-2 bg-white text-black font-semibold"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Logging in...' : 'Sign In'}
                        </Button>
                        <p className="text-center text-sm dark:text-white mt-4">Don't have an account?{' '}
                            <a href="#">Create One</a>
                        </p>
                        {error && <p className="text-red-600">{error}</p>}
                        {success && <p className="text-green-600">Login successful!</p>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage