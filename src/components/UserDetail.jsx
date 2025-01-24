import React from 'react';
import Usertableimg from '../images/usertableimg.png';
import Drop from '../images/drop.png';

const UserDetail = ({ user, onBack }) => {
    return (
        <div className="flex   bg-gray-100 font-poppins">
            <div className="bg-white shadow-lg rounded-lg p-6 w-[650px]  h-[730px] border border-purple-200">
                <h1 className="text-center text-2xl font-semibold text-[#CD44EF]  mb-4">
                    User Information
                </h1>

                <div className="flex">
                    {/* Left Section */}
                    <div className="flex flex-col items-start w-1/2">
                        <div className='flex flex-col relative items-center ml-5 object-cover'>
                            <img
                                src={Usertableimg}
                                alt="Profile"
                                className="rounded-full w-[120px] h-[120px] border-4"
                            />
                            <span className="text-xs bg-[#CD44EF26] text-[#CD44EF] rounded-full px-3 py-1 absolute left-[100px]">
                                {user.status || 'SUBSCRIBER'}
                            </span>
                            <div className='text-center'>
                                <h2 className="mt-4 font-medium text-[#CD44EF] text-xl">{user.name || 'Deborah Moore'}</h2>
                                <p className="text-[#00000099] font-medium text-sm">{user.email || 'john@gmail.com'}</p>
                                <p className="text-[#00000099] font-medium text-sm">{user.phone || '+7840505379'}</p>
                            </div>
                        </div>
                        <div className="mt-3 text-left space-y-2 w-[220px] h-[230px] px-4 py-5 rounded-lg border bg-[#CD44EF26] border-[#CD44EF]">
                            <p className="text-sm">
                                <span className="font-semibold">DATE OF BIRTH: </span>
                                <p>{user.dob || '25-23-2020'}</p>
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">WEIGHT: </span>
                                <p>{user.weight || '50 KGs'}</p>
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">HEIGHT: </span>
                                <p>{user.height || '176 cms'}</p>
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">GENDER: </span>
                                <p>{user.gender || 'Female'}</p>
                            </p>
                        </div>
                        <div className="flex flex-col w-[220px] gap-4 px-4 py-4 mt-2 rounded-lg border bg-[#CD44EF26] border-[#CD44EF]">
                            <p className="text-sm">
                                <span className="font-semibold">SUBSCRIPTION: </span>
                                <p>{user.subscription || 'Basic Gym Monthly'}</p>
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">REGISTERED ON: </span>
                                <p>{user.registeredOn || 'Friday, July 26, 2023'}</p>
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-[300px]">
                        <div className="flex justify-around items-center mb-4 bg-[#E7E7E7] rounded-full py-0">
                            <button className="text-white font-medium bg-[#CD44EF] rounded-full flex-1 py-2">
                                Day
                            </button>
                            <button className="text-gray-500 flex-1 py-2">Week</button>
                            <button className="text-gray-500 flex-1 py-2">Month</button>
                        </div>
                        <div className="bg-[#CD44EF26] rounded-lg py-8 flex flex-col justify-center items-center">
                            <p className="text-gray-600 font-medium mb-4">{new Date().toDateString()}</p>

                            <div className="relative w-full flex justify-center items-center">
                                <button className="absolute left-4 text-black text-lg">
                                    &lt;
                                </button>

                                <div className="relative flex justify-center items-center">
                                    <div className="relative w-28 h-28">
                                        <svg className="absolute  w-full h-full">
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="48%"
                                                fill="black"
                                                stroke="#e5e5e5"
                                                strokeWidth="8"
                                            />
                                        </svg>
                                        <svg className="absolute inset-0 w-full h-full">
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="48%"
                                                fill="none"
                                                stroke="#F9EC31"
                                                strokeWidth="8"
                                                strokeDasharray="1000"
                                                transform="rotate(-90deg)"
                                                transformOrigin="center"
                                            />

                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="48%"
                                                fill="none"
                                                stroke="#CD44EF"
                                                strokeWidth="8"
                                                strokeDasharray="180"
                                                strokeDashoffset="-63"
                                                transform="rotate(-90deg)"
                                                transformOrigin="center"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex justify-center items-center">
                                            <span className="text-3xl font-semibold text-white">
                                                34
                                            </span>
                                            <span className="text-sm text-gray-500">%</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="absolute right-4 text-black text-lg">
                                    &gt;
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#CD44EF26] rounded-lg p-4  mt-3 font-Roboto">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Weight Goal */}
                                <div className="flex flex-col items-center rounded-lg">
                                    <div className="relative -mb-5">
                                        <svg
                                            className="w-32 h-32"
                                            viewBox="0 0 36 36"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <defs>
                                                <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stop-color="#CD44EF" />
                                                <stop offset="100%" stop-color="#DE19A7" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M18 2 a16 16 0 0 1 0 32 a16 16 0 0 1 0 -32"
                                                fill="none"
                                                stroke="url(#gradient)"
                                                strokeWidth="3"
                                                strokeDasharray="50, 100"
                                                strokeLinecap="round"
                                                transform="rotate(-90 18 18)"
                                            />
                                        </svg>
                                        {/* Centered Text */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                            <p className="text-sm font-medium  text-black">4 kg lost</p>
                                            <div className='flex mt-6 gap-2'>
                                                <span className='text-xs font-medium'>69</span>
                                                <p className="text-xs text-black font-medium ">Current: 65kg</p>
                                                <span className='text-xs font-medium'>69</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-md font-medium text-black">Weight Goal</p>
                                </div>

                                {/* Fat Body Goal */}
                                <div className="flex flex-col items-center rounded-lg">
                                    <div className="relative -mb-5">
                                        <svg
                                            className="w-32 h-32"
                                            viewBox="0 0 36 36"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <defs>
                                                <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stop-color="#CD44EF" />
                                                <stop offset="100%" stop-color="#DE19A7" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M18 2 a16 16 0 0 1 0 32 a16 16 0 0 1 0 -32"
                                                fill="none"
                                                stroke="url(#gradient)"
                                                strokeWidth="3"
                                                strokeDasharray="50, 100"
                                                strokeLinecap="round"
                                                transform="rotate(-90 18 18)"
                                            />
                                        </svg>
                                        {/* Centered Text */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                            <p className="text-sm font-medium  text-black">4 kg lost</p>
                                            <div className='flex mt-6 gap-2'>
                                                <span className='text-xs font-medium'>69</span>
                                                <p className="text-xs text-black font-medium">Current: 65kg</p>
                                                <span className='text-xs font-medium'>69</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-md font-medium text-black">Fat Body Goal</p>
                                </div>

                            </div>
                        </div>
                        {/* Water Intake */}
                        <div className="bg-[#CD44EF26] rounded-lg p-5 mt-4 flex gap-10 items-center">
                            <div>
                                <p className="text-gray-600 text-lg flex gap-3">Water <img src={Drop} alt="" /></p>
                                <p className="text-gray-800 text-lg mt-2">3 Bottles</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-2 h-7 bg-[#CD44EF] rounded-full"></span>
                                <span className="w-2 h-16 bg-[#CD44EF] rounded-full"></span>
                                <span className="w-2 h-11 bg-[#CD44EF] rounded-full"></span>
                                <span className="w-3 h-3 bg-[#42424D] rounded-full"></span>
                                <span className="w-3 h-3 bg-[#42424D] rounded-full"></span>
                                <span className="w-3 h-3 bg-[#42424D] rounded-full"></span>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                className=" text-[#CD44EF] py-2 px-6 w-full rounded-lg border border-[#CD44EF]"
                                onClick={onBack}
                            >
                                Back
                            </button>
                            <button className="bg-[#CD44EF] w-full text-white py-2 px-6 rounded-lg">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
