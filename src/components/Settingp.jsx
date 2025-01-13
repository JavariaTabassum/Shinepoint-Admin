import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import Person from '../images/person.png';
import Key from '../images/key.png';
import Pencil from '../images/Pencil.png';
import I from '../images/I.png';
import User from '../images/userimg.jpg';

const Settingp = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
      navigate("/settingbi"); 
    };

    const handleDashboardClick = () => {
        navigate("/dashboard");
    }
    return (
        <div className=" flex flex-col items-center font-poppins">
            <style>
                {`@media (max-width: 1207px) and (min-width: 1050px){
                .dis{
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                gap: 2px;
                width: 100%;
                }
                }
                @media (max-width: 900px) and (min-width: 768px){
                .dis{
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                gap: 2px;
                }
                }
                @media (max-width: 585px){
                .dis{
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                gap: 2px;
                }
                }
                @media (max-width: 1100px) and (min-width: 1050px){
                .dis2{
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                gap: 2px;
                }
                }
                @media (max-width: 500px){
                .dis2{
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                gap: 2px;
                }
                }
                @media (max-width: 425px){
                .dis3{
                display: flex;
                flex-direction: column;
                width: 100%;
                }
                }
                @media (max-width: 500px){
                .dis4{
                display: flex;
                flex-direction: column;
                gap:20px;
                align-items: start;
                }
                }
                }
                `}
            </style>
            {/* Header */}
            <div className="w-full flex justify-between items-center px-1 py-4 dis4">
                <h1 className="text-3xl font-medium" ><FontAwesomeIcon icon={faGear} className="mr-5 text-[#CD44EF]" />Settings</h1>
                <button className="bg-[#CD44EF] text-white py-2 px-2 w-[180px] rounded-lg flex items-center justify-center"
                onClick={handleDashboardClick}>
                    <span className="mr-4 text-xl"><FontAwesomeIcon icon={faHouse} /></span> Dashboard
                </button>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row w-11/12 min-w-full mt-3 gap-6">
                {/* Sidebar */}
                <div className=" w-[300px] bg-[#EFDAF4] rounded-lg p-6 h-[130px]">
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center space-x-3 text-[#CD44EF] font-semibold">
                            <span><img src={Person} alt="" /></span>
                            <span onClick={handleProfileClick} className="cursor-pointer">Basic Information</span>
                        </li>
                        <li className="flex items-center space-x-3 text-[#6A6A6A]">
                            <span><img src={Key} alt="" /></span>
                            <span className="cursor-pointer" >Password</span>
                        </li>
                    </ul>
                </div>

                {/* Main Section */}
                <div className="w-full md:w-3/4  rounded-lg ">
                    {/* Profile Picture Section */}
                    <div className="relative border border-[#CD44EF] rounded-lg bg-[#EFDAF4]  h-[150px]">
                        {/* First Border */}
                        <div className="border border-[#CD44EF] rounded-lg h-[120px] bg-[#D0FD3E33]"></div>

                        {/* Profile Image */}
                        <div className="absolute bottom-2 left-8 flex items-center">
                            <div className="relative">
                                <img
                                    src={User} 
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full border-4 border-[#8B909F] shadow-lg"
                                />
                                <button className="absolute bottom-1 right-1 bg-black  rounded-full p-2 border-2 border-[#8B909F]">
                                    <img src={Pencil} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <form className="mt-8 bg-[#F4E3F9] p-6 rounded-lg shadow-lg border border-[#CD44EF]">
                        {/* Form Header */}
                        <h2 className="text-lg font-semibold text-[#000000] flex gap-3 items-center mb-6">
                            <img src={I} alt="" />
                            Change Your Password
                        </h2>

                        <div className="mb-6 flex items-center  dis2" >
                            <label className="block text-md font-medium text-[#000000] mb-1 w-[300px]">
                                New Password
                            </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-2 border border-[#CD44EF] rounded-lg focus:ring-2 0 outline-none"
                                />
                        </div>
                        <div className="mb-6 flex items-center  dis2">
                            <label className="block text-md font-medium text-[#000000] mb-1 w-[300px]">
                                Confirm New Password
                            </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-2 border border-[#CD44EF] rounded-lg focus:ring-2 0 outline-none"
                                />
                        </div>

                        {/* Update Button */}
                        <div className="text-right">
                            <button className="bg-[#CD44EF] text-white py-3 px-6 rounded-lg font-medium ">
                                Update
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Settingp;
