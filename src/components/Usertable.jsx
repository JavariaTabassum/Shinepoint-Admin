import React, { useState } from 'react';
import Down from '../images/down.png';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import Bricks from '../images/Bricks.png';
import UserDetail from './UserDetail';  

const UserTable = () => {
    const [selectedUser, setSelectedUser] = useState(null); 

    const users = [
        { id: 1, registeredOn: 'July 23, 2023', name: 'John', gender: 'Female', email: 'john@gmail.com', status: 'SUBSCRIBER' },
        { id: 2, registeredOn: 'Aug 5, 2023', name: 'Selena', gender: 'Female', email: 'john@gmail.com', status: 'SUBSCRIBER' },
    ];

    
    const handleRowClick = (user) => {
        setSelectedUser(user); 
    };

    const handleBack = () => {
        setSelectedUser(null);
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
                `}
            </style>
            {/* Main Content (Background) */}
            <div className='flex gap-5 mb-9 mgt'>
                <img src={Bricks} alt="" />
                <h2 className='font-poppins font-semibold text-2xl'>User List</h2>
            </div>
            <div className={`py-4 bg-[#EFDAF4] rounded-lg shadow-md font-poppins transition-all duration-300 ease-in-out `}>
                <div className="flex justify-between items-center mb-4 px-6 col">
                    <h2 className="text-xl font-medium">Information</h2>
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

                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-[#CD44EF26] w-full text-[#3F3F3F] font-medium">
                            <tr>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">SL</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Registered On</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Name</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Gender</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Email</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Status</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className="text-gray-700 text-center cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleRowClick(user)} 
                                >
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{user.registeredOn}</td>
                                    <td className="py-2 px-4">{user.name}</td>
                                    <td className="py-2 px-4">{user.gender}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">
                                        <span className="px-3 py-2 bg-[#CD44EF26] text-[#CD44EF] rounded-full">
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-2 pl-8 flex space-x-5">
                                        <FontAwesomeIcon icon={faEye} className="text-[#CD44EF] border-2 rounded-md border-[#CD44EF] p-3" />
                                        <FontAwesomeIcon icon={faTrash} className="text-[#E7104B] border-2 rounded-md border-[#E7104B] p-3" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="z-50">
                        <UserDetail user={selectedUser} onBack={handleBack} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserTable;
