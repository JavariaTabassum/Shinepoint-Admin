import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Messagesec from '../components/Messagesec';
import Bricks from '../images/Bricks.png';
import { FaBars } from 'react-icons/fa';


const Chat = () => {
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
            .mtop{
            margin-top: 20px;
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
             @media (max-width: 800px) {
            .user {
              position: absolute;
              top: 10px;
              right: 70px;
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
        <div className="flex-1 flex flex-col w-full ml-0 bg-slate-50">
          {/* Menu Icon for Smaller Screens */}
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
            <div className="flex flex-col flex-1 overflow-x-hidden">
              <div className='flex gap-5 mtop'>
                <img src={Bricks} alt="" />
                <h2 className='font-poppins font-semibold text-2xl'>Chat</h2>
              </div>

              <div className="flex flex-1 gap-6 mt-5">
                <div
                  className="rounded-lg user overflow-y-hidden"
                  style={{ height: 'calc(100vh - 180px)' }}
                >
                  <Message />
                </div>
                <div
                  className="flex-1 rounded-lg me-5 overflow-y-auto"
                  style={{ height: 'calc(100vh - 180px)' }}
                >
                  <Messagesec />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
