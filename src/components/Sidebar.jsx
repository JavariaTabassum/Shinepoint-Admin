import React from 'react';
import DB from '../images/db.png';
import UR from '../images/ur.png';
import SB from '../images/sb.png';
import BXS from '../images/bxs_videos.png';
import CT from '../images/chat.png';
import WO from '../images/Wk.png';
import Diet from '../images/Diet.png';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', name: 'Dashboard', icon: DB },
    { path: '/user', name: 'Users', icon: UR },
    { path: '/subscription', name: 'Subscription', icon: SB },
    { path: '/video', name: 'Video', icon: BXS },
    { path: '/workout', name: 'Workout', icon: WO },
    { path: '/chat', name: 'Chat', icon: CT },
    { path: '/dietplan', name: 'Diet', icon: Diet },
  ];

  return (
    <>
      <div
        className={`sidebar top-space top-0 left-0 bg-[rgba(205,68,239,1)] flex flex-col p-6 transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-[-100%]'
        } `}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl text-gray-700 close z-50"
        >
          <FaTimes />
        </button>

        <div className="mt">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-[rgba(1,1,1,1)]" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-md placeholder-[rgba(1,1,1,1)] bg-[rgba(255,255,255,0.6)]  focus:outline-none focus:ring-2 focus:ring-[rgba(205,68,239,0.5)]"
          />
        </div>

        <ul className="space-y-4 font-ibm-plex text-[rgba(111,117,126,1)]">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <NavLink
                to={item.path}
                className={`flex items-center p-2 rounded-md font-medium transition ${
                  location.pathname === item.path
                    ? 'bg-[rgba(255,255,255,0.2)] text-white'
                    : 'text-[rgba(44,44,44,1)]'
                }`}
              >
                {typeof item.icon === 'string' ? (
                  <img
                    src={item.icon}
                    alt=""
                    className={`w-5 h-5 mr-3 ${
                      location.pathname === item.path ? 'filter-white' : ''
                    }`}
                    style={{
                      filter:
                        location.pathname === item.path
                          ? 'brightness(0) invert(1)'
                          : 'none',
                    }}
                  />
                ) : (
                  <div
                    className={`text-lg mr-3 ${
                      location.pathname === item.path ? 'text-white' : 'text-[rgba(44,44,44,1)]'
                    }`}
                  >
                    {item.icon}
                  </div>
                )}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        </div>
      </div>

      <style>
        {`
          /* Sidebar for screens below 1050px */
          @media (max-width: 1050px) {
            .sidebar {
              display: ${isSidebarVisible ? 'block' : 'none'};
              z-index: 60;
              position: fixed;
              top: 0;
              left: 0;
              height: 100vh;
              margin-left: 0;
              margin-top: 0;
              box-shadow: none;
              width: 16rem;
              transform: translateX(-100%);
              transition: transform 0.7s ease-in-out;
            }

            .sidebar.translate-x-0 {
              transform: translateX(0);
            }
          }
          
          @media (min-width: 1050px) {
            .sidebar {
              display: flex;
              height: 100vh;
              width: 20rem;
              transform: translateX(0);
            }
            .close{
              display: none;
            }
          }
          
          @media (min-width: 1130px){
          .mt{
           margin-top: 80px;
          }
          }
         
        `}
      </style>
    </>
  );
};

export default Sidebar;
