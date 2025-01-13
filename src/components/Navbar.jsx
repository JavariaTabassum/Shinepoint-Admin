import React, { useState } from 'react';
import logo from '../images/logo.png';
import Bell from '../images/bell.png';
import Cart from '../images/cart.png';
import User from '../images/userimg.jpg';
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaSearch, FaTimes, FaEllipsisV } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/settingbi"); 
  };

  return (
    <div>
      <style>
        {`
          @media (max-width: 1130px) {
            .desktop-navbar {
              display: none;
            }
            .mobile-navbar {
              display: flex;
              background: transparent;
              box-shadow: none;
            }
          }
          @media (min-width: 1131px) {
            .desktop-navbar {
              display: flex;
            }
            .mobile-navbar {
              display: none;
            }
          }
        `}
      </style>

      {/* Desktop Navbar */}
      <div className="desktop-navbar flex items-center w-full pr-7 pl-7 justify-between bg-white space-x-5 font-poppins">
        {/* Left Logo */}
        <img src={logo} alt="Logo" className="w-[250px] h-[80px] object-cover " />

        {/* Search Bar */}
        <div className="mx-6">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-[350px] pl-10 pr-4 py-3 border rounded-full shadow-sm placeholder:text-[rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Right Icons and Profile */}
        <div className="flex items-center space-x-4">
          <button className="p-3 rounded-full w-[40px] border border-[rgba(205,68,239,1)]">
            <img src={Bell} alt="Notifications" />
          </button>
          <button className="p-3 rounded-full w-[45px] border border-[rgba(205,68,239,1)]">
            <img src={Cart} alt="Cart" />
          </button>
          <div className="flex items-center space-x-3 border border-[rgba(205,68,239,1)] font-medium px-3 py-2 rounded-full text-[rgba(0,0,0,1)]">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English"
              className="w-7 h-7"
            />
            <span>EN</span>
            <FaChevronDown className="text-sm text-black" />
          </div>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer"
         onClick={handleProfileClick} >
          <img
            src={User}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">admin@admin.com</p>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-navbar flex justify-end items-center p-4">
        <button
          className="text-2xl pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaEllipsisV />}
        </button>
      </div>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col space-y-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              className="text-2xl p-2 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-[250px] h-[70px] object-cover" />
          </div>

          {/* Search */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-3 border rounded-full shadow-sm placeholder:text-[rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Icons */}
          <button className="p-3 rounded-full w-[40px] border border-[rgba(205,68,239,1)]">
            <img src={Bell} alt="Notifications" />
          </button>
          <button className="p-3 rounded-full w-[45px] border border-[rgba(205,68,239,1)]">
            <img src={Cart} alt="Cart" />
          </button>

          {/* Language Selector */}
          <div className="flex items-center w-2/5 space-x-3 border border-[rgba(205,68,239,1)] font-medium px-3 py-2 rounded-full text-[rgba(0,0,0,1)]">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English"
              className="w-7 h-7"
            />
            <span>EN</span>
            <FaChevronDown className="text-sm text-black" />
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-3"
           onClick={handleProfileClick} >
            <img
              src={User}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-gray-500">admin@admin.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
