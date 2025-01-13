import React, { useState } from 'react';
import Pro from '../images/pro.png';
import Bricks from '../images/Bricks.png';
import { FaChevronDown } from 'react-icons/fa';


const NewEx = () => {

    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDescription, setExerciseDescription] = useState('');
    const [workout, setWorkout] = useState('');

    return (
        <div className="relative font-poppins">
            <style>
                {`
                @media (max-width: 700px){
                .col{
                flex-direction: column-reverse;
                gap:40px;
                align-items: center;
                }
                .wid{
                width: 100%;
                }
                
                .mgb{
                margin-bottom: 20px;
                }
                }
                @media (max-width: 1050px){
                .mgt{
                margin-top: 25px;
                }
                }
                
                `}
            </style>
            <div className='flex gap-5 mb-9 mgt'>
                <img src={Bricks} alt="" />
                <h2 className='font-poppins font-semibold text-2xl'>Add New Exercise</h2>
            </div>
            <div className={`py-5 px-8 bg-[#EFDAF4] rounded-lg shadow-md font-poppins h-full w-full mb-10  mgb `}>
                <h2 className="text-2xl font-medium mb-6">Exercise Information</h2>
                <div className='flex w-full gap-[0] mt-10 col '>
                    <div className='w-full flex flex-col gap-3'>
                        <div className="mb-4">
                            <label className="block text-black text-lg font-medium mb-2">Exercise Name</label>
                            <input
                                type="text"
                                value={exerciseName}
                                onChange={(e) => setExerciseName(e.target.value)}
                                placeholder="Arms Exercise"
                                className="w-full px-5 py-3 border border-[#CD44EF] placeholder:text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black text-lg font-medium mb-2">Exercise Description</label>
                            <textarea
                                value={exerciseDescription}
                                onChange={(e) => setExerciseDescription(e.target.value)}
                                placeholder="Description"
                                className="w-full px-5 py-3 border h-[150px] border-[#CD44EF] placeholder:text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent"
                            ></textarea>
                        </div>

                        <div className="mb-4 relative w-2/3 wid">
                            <label className="block text-black text-lg font-medium mb-2">Select a Workout</label>
                            <select
                                value={workout}
                                onChange={(e) => setWorkout(e.target.value)}
                                className="w-full px-5 py-3 border  border-[#CD44EF] text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent appearance-none"
                            >
                                <option value="">Select Workout</option>
                                <option value="workout1">Workout 1</option>
                                <option value="workout2">Workout 2</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>

                        </div>
                    </div>

                    <div className='mb-4 w-1/2'>
                        <div className='flex flex-col items-center'>
                            <p className='mb-5'>Upload Video</p>
                            <div className=" bg-[#CD44EF26] rounded-full flex items-center justify-center w-[150px] h-[150px]">
                                <img src={Pro} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-end gap-5 mt-24 ">
                    <button className="px-6 py-2 bg-transperent border border-[#A69C9C] text-[#CD44EF] rounded-md">Back</button>
                    <button className="px-6 py-2  text-white rounded-md bg-[#CD44EF]">Save</button>
                </div>

            </div>
        </div>
    );
};

export default NewEx;
