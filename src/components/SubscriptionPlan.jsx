import React from 'react';
import Bricks from '../images/Bricks.png';
import OurPlan from './OurPlan';
import SubTable from './SubTable';


const SubscriptionPlan = () => {
    return (
        <div className="relative pb-6">
            <style>
                {`
                @media (max-width: 1050px){
                .mgt{
                margin-top: 20px;
                }
                }
                `}
            </style>
            <div className="w-full px-1 py-4 ">
                <div className='flex gap-5 mb-9 mgt'>
                    <img src={Bricks} alt="" />
                    <h2 className='font-poppins font-semibold text-2xl'>Subsriptions</h2>
                </div>
            </div>
            <div className='space-y-5'>
                <OurPlan />
                <SubTable />
            </div>
        </div>
    );
};

export default SubscriptionPlan;
