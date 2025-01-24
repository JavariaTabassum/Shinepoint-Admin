import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DietTable from '../components/DietTable';
import { FaBars } from 'react-icons/fa';
import Bricks from '../images/Bricks.png';
import WeekPlan from '../components/WeekPlan';


const DietPlan = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="w-full h-screen flex flex-col ">
      <style>
        {`
          .menu-icon {
            display: none;
          }

          @media (max-width: 1050px) {
            .menu-icon {
              display: block;
              margin-top: -40px;
            }
            .margin{
            margin-left: 0px;
            }
            .zindex{
            z-index: 0;
            }
            .zindex2{
            z-index: 1;
            }
          }
          
          @media (max-width: 1130px) {
            .width{
              width:50px;
              position: absolute;
              right: 4px;
              top:4px;
            }
            .width2{
              width:50px;
              position: absolute;
              left: 20px;
              top: 60px;
            }
            .m{
            margin-top: 60px;
            }
          }
            @media (max-width: 1210px) and (min-width: 1050px){
             .colum{
             flex-direction: column;
             gap: 0;
             }
             .w{
             width:100%;
            }
            .left{
            margin-left: 20px;
            }
            .top{
            margin-top: 0;
            }
        }
            @media (max-width: 900px){
             .colum{
             flex-direction: column;
             gap: 0;
             }
             .w{
             width:100%;
            }
            .left{
            margin-left: 20px;
            }
            .top{
            margin-top: 0;
            }
        }
            `}
      </style>

      {/* Navbar */}
      <div className="z-10 w-full width fixed">
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="fixed  h-screen zindex2 ">
          <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Section */}
        <div className="flex-1 flex flex-col w-full ml-0 bg-slate-100">
          {!isSidebarVisible && (  
            <button
              className="menu-icon mt-7 ml-4 text-2xl text-black width2"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          )}

          {/* Page Content */}
          <div className="px-8 mt-[100px] ml-[320px] margin m zindex ">
            <div className="flex flex-col flex-1">
              <div className='flex gap-5'>
                <img src={Bricks} alt="" />
                <h2 className='font-poppins font-semibold text-2xl'>Diet Plan</h2>
              </div>

              <div className="flex flex-1 colum gap-6 font-Manrope -ml-7 -mt-4">
                <div
                  className="w-2/3 w"
                >
                  <DietTable />
                </div>
                <div
                  className="flex-1 mt-11 left top"
                >
                  <WeekPlan />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
