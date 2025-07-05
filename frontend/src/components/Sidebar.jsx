import React from 'react';
import { FiUpload, FiCheckCircle, FiUser } from 'react-icons/fi';

const Sidebar = ({ currentTab, setCurrentTab, user }) => (
  <div className="lg:col-span-1">
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <h2 className="text-2xl font-bold tracking-wide mb-1">Design Dashboard</h2>
        <p className="text-green-100 text-sm font-medium">Welcome back, {user?.username}</p>
      </div>
      <nav className="p-5 space-y-3">
        {[
          { label: 'New Design', icon: <FiUpload />, tab: 'design' },
          { label: 'Saved Designs', icon: <FiCheckCircle />, tab: 'saved' },
          { label: 'My Profile', icon: <FiUser />, tab: 'profile' },
        ].map(({ label, icon, tab }) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`
              w-full flex items-center gap-4 px-5 py-3 rounded-xl font-semibold transition 
              ${currentTab === tab 
                ? 'bg-green-100 text-green-700 shadow-md' 
                : 'text-gray-600 hover:bg-gray-100 hover:text-green-600'}
            `}
          >
            <span className={`text-lg ${currentTab === tab ? 'text-green-600' : 'text-gray-400'}`}>
              {icon}
            </span>
            {label}
          </button>
        ))}
      </nav>
    </div>
  </div>
);

export default Sidebar;
