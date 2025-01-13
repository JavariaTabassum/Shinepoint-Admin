import React, { useState } from 'react';
import Pro from '../images/pro.png';
import Bricks from '../images/Bricks.png';
import Equipment from './Equipment';


const NewWork = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDescription, setExerciseDescription] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false); 

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="relative font-poppins">
            <style>
                {`
                @media (max-width: 700px){
                .col{
                flex-direction: column-reverse;
                gap:40px;
                align-items:center;
                }
                .cols{
                flex-direction: column;
                gap:40px;
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
                @media (max-width: 600px){
                .colm{
                flex-direction: column;
                gap: 20px;
                align-items: stretch;
                }
                }
                `}
            </style>
            <div className='flex gap-5 mb-9 mgt'>
                <img src={Bricks} alt="" />
                <h2 className='font-poppins font-semibold text-2xl'>Add New Workout</h2>
            </div>
            <div className={`py-5 px-8 bg-[#EFDAF4] rounded-lg shadow-md font-poppins h-full w-full mb-10 mgb`}>
                <h2 className="text-2xl font-medium mb-6">Workout Information</h2>
                <div className='flex w-full gap-[0] mt-10 col'>
                    <div className='w-full flex flex-col gap-3'>
                        <div className="mb-4">
                            <label className="block text-black text-lg font-medium mb-2">Workout Name</label>
                            <input
                                type="text"
                                value={exerciseName}
                                onChange={(e) => setExerciseName(e.target.value)}
                                placeholder="Arms Exercise"
                                className="w-full px-5 py-3 border border-[#CD44EF] placeholder:text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-black text-lg font-medium mb-2">Workout Description</label>
                            <textarea
                                value={exerciseDescription}
                                onChange={(e) => setExerciseDescription(e.target.value)}
                                placeholder="Description"
                                className="w-full px-5 py-3 border h-[150px] border-[#CD44EF] placeholder:text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent"
                            ></textarea>
                        </div>
                    </div>

                    <div className='mb-4 w-2/3'>
                        <div className='flex flex-col items-center'>
                            <p className='mb-5'>Upload Video</p>
                            <div className=" bg-[#CD44EF26] rounded-full flex items-center justify-center w-[150px] h-[150px]">
                                <img src={Pro} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 flex-col flex gap-8 mt-4">
                    <div className=' flex gap-16 cols'>
                        <div className='w-full'>
                            <label className="block text-black text-lg font-medium mb-2">Category</label>
                            <input
                                type="text"
                                value={exerciseName}
                                onChange={(e) => setExerciseName(e.target.value)}
                                placeholder="Category"
                                className="w-full px-5 py-3 border border-[#CD44EF] placeholder:text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className='w-full mr-10'>
                            <label className="block text-black text-lg font-medium mb-2">Calories Burn</label>
                            <input
                                type="text"
                                value={exerciseName}
                                onChange={(e) => setExerciseName(e.target.value)}
                                placeholder="Category"
                                className="w-full px-5 py-3 border border-[#CD44EF] placeholder:text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    <div className=' flex gap-16 cols'>
                        <div className='w-full'>
                            <label className="block text-black text-lg font-medium mb-2">Time Period</label>
                            <input
                                type="text"
                                value={exerciseName}
                                onChange={(e) => setExerciseName(e.target.value)}
                                placeholder="Category"
                                className="w-full px-5 py-3 border border-[#CD44EF] placeholder:text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className='w-full mr-10'>
                            <label className="block text-black text-lg font-medium mb-2">Level</label>
                            <input
                                type="text"
                                value={exerciseName}
                                onChange={(e) => setExerciseName(e.target.value)}
                                placeholder="Category"
                                className="w-full px-5 py-3 border border-[#CD44EF] placeholder:text-[#4A4A4ACC] rounded-md focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-10 colm">
                    <div>
                        <h2 className='mb-2 font-semibold text-center'>Equipments Used</h2>
                        <button 
                            className="px-3 py-4 text-white rounded-md w-full bg-[#CD44EF]"
                            onClick={handleDialogOpen}
                        >
                            + Add equipment
                        </button>
                    </div>
                    <div className='flex gap-5 colm'>
                        <button className="px-6 py-2 bg-transperent border border-[#A69C9C] text-[#CD44EF] rounded-md">Back</button>
                        <button className="px-6 py-2 text-white rounded-md bg-[#CD44EF]">Save</button>
                    </div>
                </div>

                {isDialogOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="z-50">
                    <Equipment onClose={handleDialogClose} />
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default NewWork;
