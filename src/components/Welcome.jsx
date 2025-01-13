import React from 'react';
import Dashimg from '../images/Dashimg.jpg';

const Welcome = () => {
  return (
    <div className=" font-poppins">
        <style>
            {`
            @media (max-width:1397px) and (min-width: 1313px){
            .col{
            flex-direction: column;
            }
            }
            @media (max-width:385px){
            .columns{
            flex-direction: column;
            }
            }
            @media (max-width:1313px){
            .colum{
            display: flex;
            flex-direction: column;
            }
            }
            @media (max-width:750px){
            .column{
            display: flex;
            flex-direction: column;
            }
            }
            @media (max-width:381px){
            .colums{
            flex-direction: column-reverse;
            gap: 10px
            }
            .items{
            align-items: start;
            }
            }
            @media (max-width: 1050px){
            .mgt{
                margin-top: 20px;
              }
              }
            `}
        </style>
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8 mgt">
        <div>
          <h1 className="text-2xl font-medium text-black">
            Welcome <span className="text-[rgba(205,68,239,1)]">JHON,</span>
          </h1>
          <p className="text-gray-600">Hello, here you can manage your business by zone</p>
        </div>
        <div>
          <select className="px-4 py-2 border border-[rgba(168,168,168,0.6)] rounded-full w-[150px] bg-white shadow-sm">
            <option>All zones</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 colum lg:grid-cols-3 gap-8">
        {/* Plan Cards */}
        <div className="space-y-7">
          {/* Lite Gym Plan */}
          <div className="flex  items-center bg-[rgba(197,241,55,1)] rounded-lg py-12 px-6 shadow-md">
            <div className="flex items-center justify-center bg-black text-white w-10 h-10 rounded-full">
              <span>🏋️‍♂️</span>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium">Lite Gym Plan</h2>
            </div>
            <div className="ml-14 text-2xl font-semibold">24</div>
          </div>

          {/* Premium Gym Plan */}
          <div className="flex items-center bg-[rgba(254,215,132,0.8)] rounded-lg py-12 px-6 shadow-md">
            <div className="flex items-center justify-center bg-black text-white w-10 h-10 rounded-full">
              <span>🏋️‍♀️</span>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium">Premium Gym Plan</h2>
            </div>
            <div className="ml-8 text-2xl font-semibold">24</div>
          </div>
        </div>

        {/* User Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 column ">
          {/* User Card */}
          <div className='flex flex-col bg-purple-100  p-6 rounded-lg shadow-md'>
          <div className=" justify-between  flex flex-row-reverse colums">
            <div className="flex flex-col items-end items  mb-4">
              <span className="text-md text-[rgba(205,68,239,1)] bg-[rgba(205,68,239,0.15)] px-4 py-2 rounded-full">New User</span>
              <div className="mt-3 text-right">
                <p className="text-md">Weight: 58 Kgs</p>
                <p className="text-md mt-2">Height: 176 cm</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <img
                className="w-[100px] h-[100px] rounded-full mr-4 object-cover"
                src={Dashimg}
                alt="User Avatar"
              />
              <div>
                <p className="text-md text-black">11 Sep, 2024</p>
                <h3 className="text-2xl font-semibold text-[rgba(205,68,239,1)] mt-2">Selena John</h3>
              </div>
            </div>
          </div>
          <div className='flex col justify-between mt-4 columns'>
            <div>
                <h2 className='text-lg font-semibold'>Female</h2>
                <p className='font-medium'>30 yrs old</p>
            </div>
            <div>
                <p className='text-[rgba(255,172,0,1)] text-2xl font-bold'>Basic Gym Plan</p>
            </div>
          </div>
          </div>
          <div className='flex flex-col bg-purple-100  p-6 rounded-lg shadow-md'>
          <div className=" justify-between  flex flex-row-reverse colums">
            <div className="flex flex-col items-end items  mb-4">
              <span className="text-md text-[rgba(205,68,239,1)] bg-[rgba(205,68,239,0.15)] px-4 py-2 rounded-full">New User</span>
              <div className="mt-3 text-right">
                <p className="text-md">Weight: 58 Kgs</p>
                <p className="text-md mt-2">Height: 176 cm</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <img
                className="w-[100px] h-[100px] rounded-full mr-4 object-cover"
                src={Dashimg}
                alt="User Avatar"
              />
              <div>
                <p className="text-md text-black">11 Sep, 2024</p>
                <h3 className="text-2xl font-semibold text-[rgba(205,68,239,1)] mt-2">Selena John</h3>
              </div>
            </div>
          </div>
          <div className='flex col justify-between mt-4 columns'>
            <div>
                <h2 className='text-lg font-semibold'>Female</h2>
                <p className='font-medium'>30 yrs old</p>
            </div>
            <div>
                <p className='text-[rgba(255,172,0,1)] text-2xl font-bold'>Basic Gym Plan</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
