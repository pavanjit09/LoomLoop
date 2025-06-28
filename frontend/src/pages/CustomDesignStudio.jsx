import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiUpload, FiUser, FiSettings, FiLogOut, FiCheckCircle, FiPackage, FiBarChart2, FiUsers } from 'react-icons/fi';
import { FaTshirt, FaPalette, FaUserTie, FaLeaf } from 'react-icons/fa';
import { FaHeadset, FaEnvelope } from 'react-icons/fa';
import { FiHeart, FiBookmark } from 'react-icons/fi';

const CustomDesignStudio = () => {
  const { user, logout } = useAuth();
  const [design, setDesign] = useState(null);
  const [color, setColor] = useState('');
  const [fabric, setFabric] = useState('');
  const [artisans, setArtisans] = useState([
    { id: 1, name: 'Priya M.', specialty: 'Hand Weaving', rating: 4.9, location: 'Delhi, India' },
    { id: 2, name: 'Abdul K.', specialty: 'Embroidery', rating: 4.7, location: 'Kolkata, India' },
    { id: 3, name: 'Rajesh K.', specialty: 'Organic Dyeing', rating: 4.8, location: 'Kerala, India' }
  ]);
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [currentTab, setCurrentTab] = useState('design');
  const [savedDesigns, setSavedDesigns] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [dashboardStats, setDashboardStats] = useState({
    orders: 12,
    activeProjects: 3,
    artisansCollaborated: 7,
    carbonSaved: 42, // in kg
    waterSaved: 3800, // in liters
    designsCreated: 15
  });

  useEffect(() => {
    // Simulate loading saved designs
    const mockSavedDesigns = [
      { id: 1, name: 'Summer Collection', date: '2023-06-15' },
      { id: 2, name: 'Winter Line', date: '2023-01-20' }
    ];
    setSavedDesigns(mockSavedDesigns);
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDesign(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitDesign = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setDashboardStats(prev => ({
        ...prev,
        designsCreated: prev.designsCreated + 1,
        activeProjects: prev.activeProjects + 1
      }));
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 2000);
  };

  const fabricOptions = [
    { value: 'organic_cotton', label: 'Organic Cotton', sustainable: true },
    { value: 'bamboo', label: 'Bamboo Fabric', sustainable: true },
    { value: 'linen', label: 'Linen', sustainable: true },
    { value: 'recycled_poly', label: 'Recycled Polyester', sustainable: true }
  ];

  const colorOptions = [
    { value: 'natural_indigo', label: 'Natural Indigo', hex: '#4B0082' },
    { value: 'plant_brown', label: 'Plant Brown', hex: '#654321' },
    { value: 'turmeric_yellow', label: 'Turmeric Yellow', hex: '#FFD700' },
    { value: 'beetroot_red', label: 'Beetroot Red', hex: '#9E1B32' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
              LoomLoop Design Studio
            </span>
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                {user?.username?.charAt(0).toUpperCase()}
              </div>
              <span className="ml-2 text-gray-700">{user?.username}</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <FiLogOut className="mr-1" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
                <h2 className="text-xl font-semibold">Design Dashboard</h2>
                <p className="text-green-100">Welcome back, {user?.username}</p>
              </div>
              <nav className="p-4">
                <button
                  onClick={() => setCurrentTab('design')}
                  className={`w-full flex items-center p-3 rounded-lg mb-2 ${currentTab === 'design' ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FiUpload className="mr-3" />
                  New Design
                </button>
                <button
                  onClick={() => setCurrentTab('saved')}
                  className={`w-full flex items-center p-3 rounded-lg mb-2 ${currentTab === 'saved' ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FiCheckCircle className="mr-3" />
                  Saved Designs
                </button>
                <button
                  onClick={() => setCurrentTab('profile')}
                  className={`w-full flex items-center p-3 rounded-lg ${currentTab === 'profile' ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FiUser className="mr-3" />
                  My Profile
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentTab === 'design' && (
              <div className="space-y-6">
                {/* Design Upload */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">Create New Design</h2>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-green-400 transition-colors">
                      {design ? (
                        <div className="relative group">
                          <img
                            src={design}
                            alt="Uploaded design"
                            className="max-w-full max-h-80 rounded-lg shadow-md"
                          />
                          <button
                            onClick={() => setDesign(null)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <>
                          <FiUpload className="w-12 h-12 text-gray-400 mb-4" />
                          <p className="text-gray-600 mb-2">Drag & drop your design here</p>
                          <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            Select File
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleUpload}
                              className="hidden"
                            />
                          </label>
                          <p className="mt-2 text-xs text-gray-500">PNG, JPG up to 10MB</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Fabric and Color Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200 flex items-center">
                      <FaTshirt className="text-green-600 mr-3" />
                      <h2 className="text-xl font-semibold text-gray-800">Select Fabric</h2>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {fabricOptions.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => setFabric(option.value)}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${fabric === option.value ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-800">{option.label}</span>
                              {option.sustainable && (
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                  Sustainable
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200 flex items-center">
                      <FaPalette className="text-green-600 mr-3" />
                      <h2 className="text-xl font-semibold text-gray-800">Select Color</h2>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {colorOptions.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => setColor(option.value)}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${color === option.value ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                          >
                            <div className="flex items-center">
                              <div
                                className="w-6 h-6 rounded-full mr-3 border border-gray-200"
                                style={{ backgroundColor: option.hex }}
                              />
                              <span className="font-medium text-gray-800">{option.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Artisan Selection */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-200 flex items-center">
                    <FaUserTie className="text-green-600 mr-3" />
                    <h2 className="text-xl font-semibold text-gray-800">Select Artisan</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {artisans.map((artisan) => (
                        <div
                          key={artisan.id}
                          onClick={() => setSelectedArtisan(artisan.id)}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedArtisan === artisan.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                        >
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-white font-bold mr-4">
                              {artisan.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-800">{artisan.name}</h3>
                              <p className="text-sm text-gray-600">{artisan.specialty} • ⭐ {artisan.rating}</p>
                              <p className="text-xs text-gray-500 mt-1">{artisan.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmitDesign}
                    disabled={!design || !fabric || !color || !selectedArtisan || isSubmitting}
                    className={`px-6 py-3 rounded-lg font-medium text-white ${!design || !fabric || !color || !selectedArtisan ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 shadow-md'} flex items-center`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Submit Design Request'
                    )}
                  </button>
                </div>

                {submitSuccess && (
                  <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in-up">
                    <FiCheckCircle className="mr-2" />
                    Design submitted successfully! Our artisans will review your request.
                  </div>
                )}
              </div>
            )}

            {currentTab === 'saved' && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Saved Designs</h2>
                </div>
                <div className="p-6">
                  {savedDesigns.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {savedDesigns.map((design) => (
                        <div key={design.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 h-48 flex items-center justify-center">
                            <FiCheckCircle className="w-12 h-12 text-gray-300" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800">{design.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">Saved on {design.date}</p>
                            <div className="mt-4 flex space-x-2">
                              <button className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200">
                                Edit
                              </button>
                              <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded hover:bg-gray-200">
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <FiCheckCircle className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-lg font-medium text-gray-900">No saved designs</h3>
                      <p className="mt-1 text-gray-600">Start by creating a new design</p>
                      <button
                        onClick={() => setCurrentTab('design')}
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                      >
                        Create New Design
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentTab === 'profile' && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">My Profile</h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="flex flex-col items-center">
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-white text-4xl font-bold">
                            {user?.username?.charAt(0).toUpperCase()}
                          </div>
                          <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-gray-200 hover:bg-gray-50">
                            <FiSettings className="text-gray-600" />
                          </button>
                        </div>
                        <h3 className="mt-4 text-xl font-medium text-gray-800">{user?.username}</h3>
                        <p className="text-gray-600">Member since 2025</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Account Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                              <input
                                type="text"
                                value={user?.username || ''}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                              <input
                                type="email"
                                value={user?.email || ''}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Preferences</h3>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="newsletter"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                              />
                              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                                Subscribe to newsletter
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="notifications"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                              />
                              <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
                                Receive project notifications
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Customer Dashboard Section */}
        <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-600 to-emerald-500">
            <h2 className="text-xl font-semibold text-white">Customer Dashboard</h2>
            <p className="text-green-100">Track your orders, try for contact support, and check out your favorites</p>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Order Tracking */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FiPackage className="text-green-600 text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Order Tracking</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">In Progress</span>
                  <span className="font-medium text-gray-800">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-medium text-gray-800">{dashboardStats.orders}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cancelled</span>
                  <span className="font-medium text-gray-800">0</span>
                </div>
              </div>
              <button className="mt-6 w-full py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                View All Orders
              </button>
            </div>

            {/* Contact Support */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaHeadset className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Contact Support</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Messages</span>
                  <span className="font-medium text-gray-800">{dashboardStats.pendingMessages || 5}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Resolved Today</span>
                  <span className="font-medium text-gray-800">{dashboardStats.resolvedToday || 12}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Response Time</span>
                  <span className="font-medium text-gray-800">{dashboardStats.avgResponseTime || '2.5'} hrs</span>
                </div>
              </div>
              <button className="mt-6 w-full py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center">
                <FaEnvelope className="mr-2" />
                View All Messages
              </button>
            </div>
            {/* User Favorites / Wishlist */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FiHeart className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Your Favorites</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saved Designs</span>
                  <span className="font-medium text-gray-800">{dashboardStats.savedDesigns || 8}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Favorite Products</span>
                  <span className="font-medium text-gray-800">{dashboardStats.favoriteProducts || 5}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Added</span>
                  <span className="font-medium text-gray-800">2 days ago</span>
                </div>
              </div>
              <button
                className="mt-6 w-full py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex items-center justify-center"
                onClick={() => router.push('/profile/favorites')} // Example navigation
              >
                <FiBookmark className="mr-2" />
                View All Favorites
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomDesignStudio;



