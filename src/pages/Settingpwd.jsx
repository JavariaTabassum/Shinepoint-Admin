// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';;
// import { FaBars } from 'react-icons/fa';
// import Settingp from '../components/Settingp';

// const Settingpwd = () => {
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <div className="w-full h-screen flex flex-col ">
//       <style>
//         {`
//           .menu-icon {
//             display: none;
//           }

//           @media (max-width: 1050px) {
//             .menu-icon {
//               display: block;
//               margin-top: -40px;
//             }
//             .margin{
//             margin-left: 0px;
//             }
//           }
          
//           @media (max-width: 1130px) {
//             .width{
//               width:50px;
//               position: absolute;
//               right: 4px;
//               top:4px;
//             }
//             .width2{
//               width:50px;
//               position: absolute;
//               left: 20px;
//               top: 60px;
//             }
//             .m{
//             margin-top: 60px;
//             }
//           }
//         `}
//       </style>

//       {/* Navbar */}
//       <div className="z-10 w-full width fixed">
//         <Navbar />
//       </div>

//       {/* Main Content (Sidebar + Content) */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <div className="fixed  h-screen ">
//           <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
//         </div>

//         {/* Main Section */}
//         <div className="flex-1 flex flex-col w-full ml-0">
//           {/* Menu Icon for Smaller Screens */}
//           {!isSidebarVisible && (  // Hide menu icon when sidebar is visible
//             <button
//               className="menu-icon mt-7 ml-4 text-2xl text-black width2"
//               onClick={toggleSidebar}
//             >
//               <FaBars />
//             </button>
//           )}

//           {/* Page Content */}
//           <div className="px-8 mt-[100px] ml-[320px] margin m" >
//             {/* Content Goes Here */}
//             <Settingp />
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settingpwd;

// Import statements should be at the very top
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { FaBars } from 'react-icons/fa';
import Settingp from '../components/Settingp';

const Settingpwd = () => {
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
        `}
      </style>

      {/* Navbar */}
      <div className="z-10 w-full width fixed">
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="fixed  h-screen zindex2">
          <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Section */}
        <div className="flex-1 flex flex-col w-full ml-0">
          {!isSidebarVisible && (  
            <button
              className="menu-icon mt-7 ml-4 text-2xl text-black width2"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          )}

          {/* Page Content */}
          <div className="px-8 mt-[100px] ml-[320px] margin m zindex" >
            <Settingp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settingpwd;
