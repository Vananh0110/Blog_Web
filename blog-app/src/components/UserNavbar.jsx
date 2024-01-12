import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiPencilLine } from 'react-icons/ri'; // Import icon from react-icons
import noavatar from '../assets/images/noavatar.jpg';

const UserNavbar = ({ user }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const avatarSrc = user && user.avatar_url ? user.avatar_url : noavatar;

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogoutClick = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/user/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MyBlog
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Icon and text for writing blog */}
          <button
            type="button"
            className="flex items-center focus:outline-none mr-7"
            onClick={() => {
              navigate('/user/blog/create');
            }}
          >
            <RiPencilLine className="text-xl ml-2" />
            <span className="text-sm font-semibold ml-1">Write</span>
          </button>
          {/* User avatar and dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={handleUserMenuToggle}
              className="flex items-center focus:outline-none"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={avatarSrc}
                alt="User Avatar"
              />
            </button>
            {isUserMenuOpen && (
              <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-lg py-1">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  type="button"
                  onClick={handleLogoutClick}
                  className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        ></div>
      </div>
    </nav>
  );
};

export default UserNavbar;
