import React, { useState } from 'react';

const AddSub = ({ onClose }) => {
    const [equipmentName, setEquipmentName] = useState('');
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('');

    const handleAddEquipment = () => {
        onClose();
    };

    return (
        <div className="bg-white px-8 py-8 rounded-lg shadow-lg w-[450px] font-poppins">
            <h2 className="text-xl font-semibold mb-4 text-center">Add Subscription</h2>
            <div className="mb-3">
                <label className="block text-black text-lg font-medium mb-2 ">Subscription Name</label>
                <input
                    type="text"
                    value={equipmentName}
                    onChange={(e) => setEquipmentName(e.target.value)}
                    className="w-full px-4 py-2 border border-[#CD44EF]  rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-3">
                <label className="block text-black text-lg font-medium mb-2">Price</label>
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-2 border border-[#CD44EF]  rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-3">
                <label className="block text-black text-lg font-medium mb-2">Description</label>
                <textarea
                    type="textarea"
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value)}
                    className="w-full h-[170px] px-4 py-2 border border-[#CD44EF]  rounded-md focus:outline-none"
                />
            </div>
            <div className="flex flex-col justify-center  gap-4 mt-10">
                <button
                    className="px-6 py-2 bg-[#CD44EF] text-white rounded-md"
                    onClick={handleAddEquipment}
                >
                    Add Subsription
                </button>
                <button
                    className="px-6 py-2 bg-transparent border border-[#A69C9C] text-[#CD44EF] rounded-md"
                    onClick={onClose}
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default AddSub;

