import React from 'react';

const recommendedFabrics = [
  'Cotton',
  'Silk',
  'Linen',
  'Wool',
  'Hemp',
  'Jute',
  'Rayon',
  'Bamboo'
];

const FabricSelector = ({ selected, setSelected }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Fabric Type</label>
    <input
      type="text"
      list="fabric-options"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-800 bg-white"
      placeholder="Enter or choose a fabric"
    />
    <datalist id="fabric-options">
      {recommendedFabrics.map((fabric, index) => (
        <option key={index} value={fabric} />
      ))}
    </datalist>
  </div>
);

export default FabricSelector;

