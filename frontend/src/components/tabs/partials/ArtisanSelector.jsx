import React from 'react';

const artisans = [
  { name: 'Priya M.', skill: 'Hand Weaving', location: 'Delhi, India', rating: 4.9 },
  { name: 'Abdul K.', skill: 'Embroidery', location: 'Kolkata, India', rating: 4.7 },
  { name: 'Rajesh K.', skill: 'Handloom Weaving', location: 'Kozhikode, Kerala', rating: 4.8 },
  { name: 'Maria G.', skill: 'Embroidery', location: 'Buenos Aires, Argentina', rating: 4.6 },
  { name: 'Kwame A.', skill: 'Natural Dyeing', location: 'Accra, Ghana', rating: 4.5 },
  { name: 'Linh T.', skill: 'Hand Weaving', location: 'Hanoi, Vietnam', rating: 4.8 },
];

const ArtisanSelector = ({ selected, setSelected }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Select Artisan</label>
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-800 bg-white"
    >
      <option value="">-- Choose Artisan --</option>
      {artisans.map((artisan, index) => (
        <option
          key={index}
          value={artisan.name}
        >
          {`${artisan.name} - ${artisan.skill} (${artisan.location}) ⭐ ${artisan.rating}`}
        </option>
      ))}
    </select>
  </div>
);

export default ArtisanSelector;

