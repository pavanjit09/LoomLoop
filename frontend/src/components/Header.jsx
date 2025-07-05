// File: src/components/Header.jsx
import React from 'react';
import { FiLogOut } from 'react-icons/fi';

const Header = ({ user, logout }) => (
  <header className="bg-gradient-to-r from-green-50 to-emerald-100 shadow-md border-b border-emerald-200">
    <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 flex justify-between items-center">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 drop-shadow-sm">
        LoomLoop
      </h1>
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <span className="text-gray-700 font-medium text-md">{user?.username}</span>
        </div>
        <button
          onClick={logout}
          className="flex items-center text-white bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2 rounded-lg shadow hover:from-red-600 hover:to-rose-700 transition-colors"
        >
          <FiLogOut className="mr-2" /> Logout
        </button>
      </div>
    </div>
  </header>
);

export default Header;

