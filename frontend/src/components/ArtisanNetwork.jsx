import React, { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiUsers, FiFilter, FiSearch } from 'react-icons/fi';

const Map = lazy(() => import('./MapComponent'));

const ArtisanNetwork = () => {
  const [artisans, setArtisans] = useState([]);
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [filters, setFilters] = useState({
    skill: '',
    region: '',
    capacity: 'available'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArtisans([
        {
          _id: '1',
          name: 'Priya M.',
          skills: ['Hand Weaving', 'Natural Dyeing'],
          location: {
            coordinates: [77.2090, 28.6139],
            city: 'Delhi, India',
            region: 'south_asia'
          },
          capacity: { current: 3, max: 8 },
          rating: 4.9,
          yearsExperience: 12
        },
        {
          _id: '2',
          name: 'Abdul K.',
          skills: ['embroidery', 'Block Printing'],
          location: {
            coordinates: [88.3639, 22.5726],
            city: 'Kolkata, India',
            region: 'south_asia'
          },
          capacity: { current: 5, max: 10 },
          rating: 4.7,
          yearsExperience: 8
        },
        {
          _id: '3',
          name: 'Rajesh K.',
          skills: ['Handloom Weaving', 'Organic Dyeing'],
          location: {
            coordinates: [75.7804, 11.2588],
            city: 'Kozhikode, Kerala',
            region: 'south_asia'
          },
          capacity: { current: 2, max: 6 },
          rating: 4.8,
          yearsExperience: 15
        },
        {
          _id: '4',
          name: 'Maria G.',
          skills: ['embroidery', 'Hand Weaving'],
          location: {
            coordinates: [-58.3816, -34.6037],
            city: 'Buenos Aires, Argentina',
            region: 'south_america'
          },
          capacity: { current: 4, max: 7 },
          rating: 4.6,
          yearsExperience: 10
        },
        {
          _id: '5',
          name: 'Kwame A.',
          skills: ['Natural Dyeing', 'Block Printing'],
          location: {
            coordinates: [-0.1866, 5.6037],
            city: 'Accra, Ghana',
            region: 'africa'
          },
          capacity: { current: 1, max: 5 },
          rating: 4.5,
          yearsExperience: 7
        },
        {
          _id: '6',
          name: 'Linh T.',
          skills: ['Hand Weaving', 'embroidery'],
          location: {
            coordinates: [105.8342, 21.0278],
            city: 'Hanoi, Vietnam',
            region: 'south_asia'
          },
          capacity: { current: 6, max: 8 },
          rating: 4.8,
          yearsExperience: 9
        }
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredArtisans = useMemo(() => {
    return artisans.filter(artisan => {
      if (filters.skill && !artisan.skills.some(skill => skill.toLowerCase().includes(filters.skill.toLowerCase()))) {
        return false;
      }
      if (filters.region && artisan.location.region !== filters.region) {
        return false;
      }
      if (filters.capacity === 'available' && artisan.capacity.current >= artisan.capacity.max) {
        return false;
      }
      if (searchQuery && !artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !artisan.location.city.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [artisans, filters, searchQuery]);

  const avgExperience = useMemo(() => {
    if (filteredArtisans.length === 0) return 0;
    const total = filteredArtisans.reduce((sum, artisan) => sum + artisan.yearsExperience, 0);
    return (total / filteredArtisans.length).toFixed(1);
  }, [filteredArtisans]);

  return (
    <section id="marketplace" className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-900/30 text-amber-400 text-sm px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-4 border border-amber-400/30">
            Global Network
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Artisans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connecting traditional craftsmanship with sustainable innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm h-fit lg:sticky lg:top-6"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FiFilter className="text-amber-400" /> Filters
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Skill</label>
                <select 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  value={filters.skill}
                  onChange={(e) => setFilters({...filters, skill: e.target.value})}
                >
                  <option value="">All Skills</option>
                  <option value="Hand Weaving">Hand Weaving</option>
                  <option value="Natural Dyeing">Natural Dyeing</option>
                  <option value="embroidery">Embroidery</option>
                  <option value="Block Printing">Block Printing</option>
                  <option value="Organic Dyeing">Organic Dyeing</option>
                  <option value="Handloom Weaving">Handloom Weaving</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Region</label>
                <select 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  value={filters.region}
                  onChange={(e) => setFilters({...filters, region: e.target.value})}
                >
                  <option value="">All Regions</option>
                  <option value="south_asia">South Asia</option>
                  <option value="south_america">South America</option>
                  <option value="africa">Africa</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Availability</label>
                <select 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  value={filters.capacity}
                  onChange={(e) => setFilters({...filters, capacity: e.target.value})}
                >
                  <option value="available">Available Now</option>
                  <option value="all">Show All</option>
                </select>
              </div>

              <div className="relative">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search artisans..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-400">Total Artisans</span>
                <span className="font-bold">{filteredArtisans.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Avg. Experience</span>
                <span className="font-bold">{avgExperience} years</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
              style={{ height: '500px' }}
            >
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
                </div>
              ) : (
                <Suspense fallback={
                  <div className="h-full flex items-center justify-center">
                    <div className="animate-pulse">Loading map...</div>
                  </div>
                }>
                  <Map 
                    artisans={filteredArtisans} 
                    onMarkerClick={setSelectedArtisan}
                  />
                </Suspense>
              )}
            </motion.div>

            {selectedArtisan && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 rounded-full">
                      <div className="bg-gray-900 rounded-full p-1">
                        <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                          <FiUsers className="text-amber-400 text-2xl" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedArtisan.name}</h3>
                      <p className="text-amber-400 mb-2">{selectedArtisan.skills.join(', ')}</p>
                      <div className="flex items-center text-gray-400 text-sm">
                        <FiMapPin className="mr-1" />
                        <span>Based in {selectedArtisan.location.city}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Current Capacity</h4>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-emerald-600 h-4 rounded-full" 
                        style={{ 
                          width: `${(selectedArtisan.capacity.current / selectedArtisan.capacity.max) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <p className="text-right text-sm mt-1">
                      {selectedArtisan.capacity.max - selectedArtisan.capacity.current} slots available
                    </p>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      View Portfolio
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                      {selectedArtisan.yearsExperience}
                    </p>
                    <p className="text-gray-400 text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">{selectedArtisan.rating}</p>
                    <p className="text-gray-400 text-sm">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">120+</p>
                    <p className="text-gray-400 text-sm">Items Produced</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-gray-400 text-sm">Zero Waste</p>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FiUsers className="text-amber-400" /> Featured Artisans
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtisans.map((artisan) => (
                  <motion.div
                    key={artisan._id}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-amber-400/30 transition-all cursor-pointer"
                    onClick={() => setSelectedArtisan(artisan)}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 rounded-full">
                        <div className="bg-gray-900 rounded-full p-1">
                          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                            <FiUsers className="text-amber-400 text-xl" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">{artisan.name}</h4>
                        <p className="text-sm text-amber-400">{artisan.skills[0]}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span className="flex items-center">
                        <FiMapPin className="mr-1" /> {artisan.location.city}
                      </span>
                      <span>⭐ {artisan.rating}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanNetwork;