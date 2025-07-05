import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DesignTab from '../components/tabs/DesignTab';
import SavedTab from '../components/tabs/SavedTab';
import ProfileTab from '../components/tabs/ProfileTab';
import DashboardSection from '../components/DashboardSection';

const CustomDesignStudio = () => {
  const { user, logout } = useAuth();
  const [currentTab, setCurrentTab] = useState('design');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Vertical bars background - now properly aligned */}
      <div className="fixed inset-0 flex z-0">
        <div className="flex w-full h-full">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className={`h-full flex-shrink-0 ${i % 2 === 0 ? 'bg-emerald-200' : 'bg-emerald-100'}`}
              style={{ width: `${100/24}%` }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header user={user} logout={logout} />
        <main className="flex-grow max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} user={user} />
            
            {/* Content panel */}
            <div className="lg:col-span-3 bg-white bg-opacity-90 rounded-lg border border-gray-200 p-6 shadow-lg">
              {currentTab === 'design' && <DesignTab />}
              {currentTab === 'saved' && <SavedTab setCurrentTab={setCurrentTab} />}
              {currentTab === 'profile' && <ProfileTab user={user} />}
            </div>
          </div>
          <DashboardSection />
        </main>
      </div>
    </div>
  );
};

export default CustomDesignStudio;





