import React, { useState, useRef } from 'react';
import Down from '../images/down.png';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const SubTable = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });
    const [showCancelDialog, setShowCancelDialog] = useState(false);
    const tableRef = useRef(null);

    const [users, setUsers] = useState([
        { id: 1, user: 'John', Plan: 'Basic', Date: 'Aug 5, 2023', payment: 'PAID', status: 'Active' },
        { id: 2, user: 'Selena', Plan: 'Basic', Date: 'Aug 5, 2023', payment: 'PENDING', status: 'Expired' },
    ]);

    const handleIconClick = (user, event) => {
        const tableRect = tableRef.current.getBoundingClientRect();
        const iconRect = event.target.getBoundingClientRect();
        setDialogPosition({
            x: iconRect.left - tableRect.left - 200,
            y: iconRect.top - tableRect.top,
        });
        setSelectedUser(user);
    };

    const handlePayment = () => {
        if (selectedUser) {
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === selectedUser.id ? { ...user, payment: 'PAID' } : user
                )
            );
            setSelectedUser(null);
        }
    };

    const handleCancelSubscription = () => {
        setShowCancelDialog(true);
    };

    const closeCancelDialog = () => {
        setShowCancelDialog(false);
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
                `}
            </style>
            <div className={`py-4 bg-[#EFDAF4] rounded-lg shadow-md font-poppins transition-all duration-300 ease-in-out`}>
                <div className="flex justify-between items-center mb-4 px-6 col">
                    <h2 className="text-xl font-medium">Payment Information</h2>
                    <div className="flex gap-7 colm">
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

                <div className="overflow-x-auto" ref={tableRef}>
                    <table className="min-w-full">
                        <thead className="bg-[#CD44EF26] w-full text-[#3F3F3F] font-medium">
                            <tr>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">SL</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">User</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Plan</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Date Subscribed</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Payment</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Status</th>
                                <th className="py-2 px-4 text-center font-semibold whitespace-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className="text-gray-700 text-center">
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{user.user}</td>
                                    <td className="py-2 px-4">{user.Plan}</td>
                                    <td className="py-2 px-4">{user.Date}</td>
                                    <td className="py-2 px-4">
                                        <span
                                            className={`px-3 py-2 rounded-full ${
                                                user.payment === 'PENDING'
                                                    ? 'bg-[#CD44EF26] text-[#FD3E3E]'
                                                    : 'bg-[#CD44EF26] text-[#CD44EF]'
                                            }`}
                                        >
                                            {user.payment}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">
                                        <span
                                            className={`px-3 py-2 rounded-full ${
                                                user.status === 'Expired'
                                                    ? 'bg-[#CD44EF26] text-[#FD3E3E]'
                                                    : 'bg-[#CD44EF26] text-[#CD44EF]'
                                            }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-2">
                                        <FontAwesomeIcon
                                            icon={faEllipsisV}
                                            className="text-[#CD44EF] text-2xl cursor-pointer font-semibold p-3"
                                            onClick={(e) => handleIconClick(user, e)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedUser && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                    <div
                        className="absolute z-50 bg-white p-6 font-semibold font-poppins rounded-lg shadow-lg"
                        style={{
                            position: 'absolute',
                            top: `${dialogPosition.y}px`,
                            left: `${dialogPosition.x}px`,
                        }}
                    >
                        <h2 className='cursor-pointer' onClick={handleCancelSubscription}>Cancel Subscription</h2>
                        <h2 className="cursor-pointer mt-5 " onClick={handlePayment}>
                            Payment Complete
                        </h2>
                    </div>
                </>
            )}

            {showCancelDialog && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                    <div className="relative bg-white p-8 rounded-lg shadow-lg z-60 w-[540px] font-poppins">
                        <h2 className="text-xl font-semibold text-center text-[#CD44EF]">Cancel Subscription</h2>
                        <p className="text-[#000000B2] text-center mt-10">
                            Do you really want to cancel the subscription of this user? In case of cancellation, you have to refund the payment.
                        </p>
                        <div className="flex justify-center mt-6 gap-4">
                            <button
                                className="px-6 py-2 border border-[#CD44EF] text-[#CD44EF] rounded-lg"
                                onClick={closeCancelDialog}
                            >
                                Back
                            </button>
                            <button
                                className="px-6 py-2 bg-[#CD44EF] text-white rounded-lg">
                                Refund
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubTable;
