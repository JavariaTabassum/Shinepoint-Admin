import React from 'react';
import { useNavigate } from "react-router-dom";
import Down from '../images/down.png';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wimg from '../images/wimg.png';
import Bricks from '../images/Bricks.png';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const workouts = [
    { id: 1, title: "Arms Exercise", rating: 4.3 },
    { id: 2, title: "Arms Exercise", rating: 4.3 },
    { id: 3, title: "Arms Exercise", rating: 4.3 },
    { id: 4, title: "Arms Exercise", rating: 4.3 },
    { id: 5, title: "Arms Exercise", rating: 4.3 },
    { id: 6, title: "Arms Exercise", rating: 4.3 },
];

const Workouts = () => {
    const navigate = useNavigate();

    const handleWorkoutClick = () => {
        navigate("/newworkout"); 
      };

    return (
        <div className="relative">
            <style>
                {`
                @media (max-width:660px){
                .col{
                flex-direction: column;
                justify-content: start;
                align-items: start;
                gap:20px;
                }
                }
                @media (max-width:515px){
                .colm{
                flex-direction: column;
                }
                .padd{
                padding: 10px;
                }
                }
                @media (max-width: 1050px){
                .mgt{
                margin-top: 20px;
                }
                }
                @media (max-width: 1200px) and (min-width:1050px){
                .gd{
                grid-template-columns: repeat(2, 1fr);
                justify-items: center;
                }
                }
                @media (max-width: 850px){
                .gd{
                grid-template-columns: repeat(2, 1fr);
                justify-items: center;
                }
                }
                @media (max-width: 580px){
                .gd{
                grid-template-columns: repeat(1, 1fr);
                justify-items: center;
                }
                }
                @media (max-width: 485px){
                .cols{
                flex-direction: column;
                align-items: start;
                }
                }
                `}
            </style>
            <div className="w-full cols flex justify-between items-center px-1 py-4">
                <div className='flex gap-5 mb-9 mgt'>
                    <img src={Bricks} alt="" />
                    <h2 className='font-poppins font-semibold text-2xl'>Workouts</h2>
                </div>
                <button className="bg-[#CD44EF] text-white py-2 px-2 w-[200px] text-lg font-medium  rounded-lg flex items-center justify-center" onClick={handleWorkoutClick}>
                    Add New Workout
                </button>
            </div>
            <div className={`py-4 bg-[#EFDAF4] rounded-lg shadow-md font-poppins transition-all duration-300 ease-in-out pb-20`}>
                <div className="flex justify-end items-center mb-4 px-6 col">
                    <div className='flex gap-7 colm'>
                        <div className="relative w-auto border border-white rounded-md">
                            <input
                                type="text"
                                placeholder="Ex: type by name"
                                className="w-full p-3 pl-6 text-lg placeholder:text-[black] rounded-md bg-transparent focus:outline-none"
                            />
                            <button className="absolute top-0 right-0 h-full w-14 rounded-r-md text-white bg-[#CD44EF] flex items-center font-medium justify-center">
                                <FaSearch />
                            </button>
                        </div>
                        <button className="text-[#CD44EF] border border-[#CD44EF] padd justify-center w-[130px] font-medium rounded-lg flex items-center gap-3">
                            <img src={Down} alt="" />Export <FaChevronDown />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 ml-10 mt-8 mr-10 gap-5 gd">
                    {workouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="rounded-lg shadow-lg bg-[#CD44EF26] border border-[#CD44EF] flex flex-col "
                            style={{ width: "90%", height: "250px" }} 
                        >
                            {/* Workout Image */}
                            <img
                                src={Wimg} 
                                alt={workout.title}
                                className="w-full h-[180px] object-cover rounded-lg border-[#CD44EF]" 
                            />

                            {/* Workout Details */}
                            <div className="mt-4 text-left ml-5">
                                <h3 className="text-md font-semibold">{workout.title}</h3>
                                <div className=" flex items-center">
                                    {/* Stars */}
                                    <div className="flex text-[#FFC960]">
                                        {[...Array(5)].map((_, index) => (
                                            <span key={index} className="text-md"><FontAwesomeIcon icon={faStar} /></span>
                                        ))}
                                    </div>
                                    <span className="ml-2 text-xs text-[#000000CC]">{workout.rating} ratings</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Workouts;
