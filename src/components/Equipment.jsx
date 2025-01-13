import React, { useState } from 'react';

const Equipment = ({ onClose }) => {
    const [equipmentName, setEquipmentName] = useState('');
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('');

    const handleAddEquipment = () => {
        onClose();
    };

    return (
        <div className="bg-white px-8 py-8 rounded-lg shadow-lg w-[450px] font-poppins">
            <h2 className="text-xl font-semibold mb-4 text-center">Add Equipment</h2>
            <div className="mb-3">
                <label className="block text-black text-lg font-medium mb-2 ">Name</label>
                <input
                    type="text"
                    value={equipmentName}
                    onChange={(e) => setEquipmentName(e.target.value)}
                    className="w-full px-4 py-2 border border-[#CD44EF]  rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-3">
                <label className="block text-black text-lg font-medium mb-2">Weight</label>
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-2 border border-[#CD44EF]  rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-3">
                <label className="block text-black text-lg font-medium mb-2">Weight Unit</label>
                <input
                    type="text"
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value)}
                    className="w-full px-4 py-2 border border-[#CD44EF]  rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-3">
                <label className="block text-black text-lg font-medium mb-3">Image</label>
                    <input
                        type="text"
                        placeholder='Choose File'
                        className="w-full px-4 py-2 border border-[#CD44EF] placeholder:text-black  rounded-md focus:outline-none"
                    />
            </div>
            <div className="flex flex-col justify-center  gap-4 mt-10">
                <button
                    className="px-6 py-2 bg-[#CD44EF] text-white rounded-md"
                    onClick={handleAddEquipment}
                >
                    Add equipment
                </button>
                <button
                    className="px-6 py-2 bg-transparent border border-[#A69C9C] text-[#CD44EF] rounded-md"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Equipment;

