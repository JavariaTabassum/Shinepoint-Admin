import React, { useState } from 'react';
import logo from '../images/logo.png';
import lock from '../images/lock.png';
import background from '../images/lbg.png';
import Quote from '../images/quote.png';
import Google from '../images/google.png';
import Fb from '../images/fb.png';
import Apple from '../images/apple.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email is required.';
        }
        if (!password) {
            newErrors.password = 'Password is required.';
        }

        if (newErrors.email || newErrors.password) {
            setErrors(newErrors);
        } else {
            console.log('Form submitted:', { email, password });
            navigate('/dashboard');
        }
    };

    return (
        <div className="w-full max-h-screen font-poppins overflow-hidden">
            <style>
                {`
            @media (max-width: 900px){
            .right{
            display:none;
            }
            .fullw{
            width:100%;
            }
            }
            @media (max-width: 1024px){
            .marg{
            margin-bottom: 0px;
            }
            .marg2{
            margin-bottom: 20px;
            }
            }
            `}
            </style>
            <div className="flex w-full h-full">
                {/* Left Section */}
                <div className="w-full md:w-2/5 fullw flex flex-col justify-center items-center px-10">
                    <div className="w-full max-w-md">
                        <img src={logo} alt="ShinePoint Health Logo" className="h-[100px] mb-8 marg" />
                        <p className="text-gray-500  mb-12 text-center text-md w-lg marg2">
                            Managing made delightful. Login now to experience it.
                        </p>
                        <form onSubmit={handleSubmit} className='max-w-[400px] mx-auto '>
                            <div className="mb-4 ">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className={`w-full px-4 py-4  border border-gray-300 rounded focus:bg-white bg-gray-100 focus:ring-2 focus:ring-[rgba(205,68,239,1)] focus:outline-none placeholder-[rgba(8,8,8,0.6)] text-sm ${errors.email ? 'border-red-500' : ''
                                    }`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div className="mb-2">
                                <div className="relative">
                                <img src={lock} alt="Lock Icon" className="absolute left-4 top-4 w-4" />
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className={`w-full px-10 py-4 border rounded bg-gray-100 border-gray-300 focus:bg-white focus:ring-2 focus:ring-[rgba(205,68,239,1)] focus:outline-none placeholder-[rgba(8,8,8,0.6)] text-sm ${errors.password ? 'border-red-500' : ''
                                        }`}
                                    />
                                </div>
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>
                            <div className="text-right  mb-4">
                                <a href="#" className="text-sm text-black hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="mb-3 flex items-center">
                                <input type="checkbox" id="remember" className="mr-2 w-4 h-4 peer-checked:bg-[rgba(205,68,239,1)]" />
                                <label htmlFor="remember" className="text-black text-md font-medium">
                                    Remember me
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 mt-5 text-white bg-[rgba(205,68,239,1)] rounded-2xl text-lg font-medium"
                            >
                                Login
                            </button>
                        </form>
                        <p className="text-center text-sm text-gray-600 mt-8">
                            Don’t have an account?{' '}
                            <a href="#" className="text-[rgba(205,68,239,1)] hover:underline">
                                Sign Up
                            </a>
                        </p>
                        <div className="flex mt-10 justify-around gap-5">
                            <div className="flex items-center justify-center w-[300px] h-[70px] border rounded-lg">
                                <img src={Google} alt="Google" className="w-8" />
                            </div>
                            <div className="flex items-center justify-center w-[300px] h-[70px] border rounded-lg">
                                <img src={Fb} alt="Facebook" className="w-8" />
                            </div>
                            <div className="flex items-center justify-center w-[300px] h-[70px] border rounded-lg">
                                <img src={Apple} alt="Apple" className="w-8" />
                            </div>
                        </div>
                    </div>
                    <footer className='mt-10'>&copy;  2023 Andrews | All rights reserved </footer>
                </div>

                {/* Right Section */}
                <div className="right md:flex items-end p-20 justify-center w-full  md:w-3/5 h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 69.48%, rgba(0, 0, 0, 0.7) 100%), url(${background})` }}>
                    <div className=" text-[rgba(255,255,255,0.8)] text-center ">
                        <blockquote className="text-3xl leading-[60px] -mb-16">
                            <div className='flex gap-3'>
                                <img src={Quote} alt="" />
                                <img src={Quote} alt="" />
                            </div>
                            Find reliable and highly rated <br /> babysitters that fit your schedule  <br />effortlessly.
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
