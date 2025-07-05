// File: src/components/tabs/ProfileTab.jsx
import React from 'react';

const ProfileTab = ({ user }) => {
  return (
    <div className="bg-gradient-to-br from-emerald-100 to-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-green-300">
        <h2 className="text-2xl font-bold text-green-800">My Profile</h2>
      </div>
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">{user?.username}</h3>
          </div>

          <div className="md:w-2/3 w-full">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
                    <input
                      type="text"
                      value={user?.username || ''}
                      readOnly
                      className="w-full px-4 py-3 border border-emerald-300 rounded-lg bg-white shadow-sm text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      readOnly
                      className="w-full px-4 py-3 border border-emerald-300 rounded-lg bg-white shadow-sm text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;

