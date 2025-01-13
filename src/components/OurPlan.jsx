import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddSub from "./AddSub";

const OurPlan = () => {
  const plans = [
    { name: "LITE", price: 100 },
    { name: "PREMIUM", price: 2200 },
  ];

const [isDialogOpen, setIsDialogOpen] = useState(false); 
  
      const handleDialogOpen = () => {
          setIsDialogOpen(true);
      };
  
      const handleDialogClose = () => {
          setIsDialogOpen(false);
      };

  return (
    <div className="w-full mx-auto p-6 bg-[#FFFFFF]  rounded-md"
    style={{ boxShadow: "0px 0px 5px 0px #00000050" }}>
        <style>
            {`
            @media (max-width: 565px){
            .colm{
            flex-direction: column;
            align-items: start;
            gap: 20px;
            }
            }
            `}
        </style>
      <div className="flex justify-between items-center colm">
        <h2 className="text-xl font-semibold text-gray-800">Our Subscription Plans</h2>
        <button className="bg-[#CD44EF] text-white py-2 px-2 w-[200px] text-lg font-medium  rounded-lg flex items-center justify-center"
         onClick={handleDialogOpen} >
                   + Add Subscription 
                </button>
      </div>
      <div className="mt-4 space-y-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-5 bg-white rounded-md" style={{ boxShadow: "0px 0px 5px 0px #00000050" }}
          >
            <div>
              <h3 className="text-lg font-medium text-gray-700">{plan.name}</h3>
              <p className="text-sm text-gray-500">${plan.price}</p>
            </div>
            <div className="flex items-center space-x-8">
            <button>
                <FontAwesomeIcon icon={faPen} className="text-[#CD44EF] bg-[#F5F5F5] rounded-full  p-5" />
              </button>
              <button>
                <FontAwesomeIcon icon={faTrash} className="text-[#CD44EF] bg-[#F5F5F5] rounded-full  p-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {isDialogOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div className="z-50">
                    <AddSub onClose={handleDialogClose} />
                    </div>
                </div>
                )}
    </div>
  );
};

export default OurPlan;
