import React from 'react';

const UserDetail = ({ user, onBack }) => {
    return (
        <div className="flex justify-center items-center bg-gray-100 font-poppins">
            <div className="bg-white shadow-lg rounded-lg p-6 w-[600px]  h-[650px] border border-purple-200">
                <h1 className="text-center text-2xl font-semibold text-[#CD44EF]  mb-4">
                    User Information
                </h1>

                <div className="flex">
                    {/* Left Section */}
                    <div className="flex flex-col items-start w-1/2">
                        <div className='flex flex-col relative items-center ml-5'>
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Profile"
                                className="rounded-full w-24 h-24 border-4 border-purple-300"
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
                        <div className="mt-6 text-left space-y-2 w-full h-[263px] px-4 py-7 rounded-lg border bg-[#CD44EF26] border-[#CD44EF]">
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
                        <div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 ml-4">
                        <div className="flex justify-around items-center mb-4 bg-[#E7E7E7] rounded-full py-0">
                            <button className="text-white font-medium bg-[#CD44EF] rounded-full flex-1 py-2">
                                Day
                            </button>
                            <button className="text-gray-500 flex-1 py-2">Week</button>
                            <button className="text-gray-500 flex-1 py-2">Month</button>
                        </div>


                        <div className="bg-purple-100 rounded-lg py-8 flex flex-col justify-center items-center">
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
                        <div className="flex flex-col mt-10 gap-4 px-4 py-7 rounded-lg border bg-[#CD44EF26] border-[#CD44EF]">
                            <p className="text-sm">
                                <span className="font-semibold">SUBSCRIPTION: </span>
                                <p>{user.subscription || 'Basic Gym Monthly'}</p>
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">REGISTERED ON: </span>
                                <p>{user.registeredOn || 'Friday, July 26, 2023'}</p>
                            </p>
                        </div>


                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        className=" text-[#CD44EF] py-2 px-6 rounded-lg border border-[#CD44EF]"
                        onClick={onBack} // Ensure this calls the parent component's onBack function
                    >
                        Back
                    </button>
                    <button className="bg-[#CD44EF] text-white py-2 px-6 rounded-lg">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
