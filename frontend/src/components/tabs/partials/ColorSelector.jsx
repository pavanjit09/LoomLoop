import React from 'react';

const recommendedColors = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Black',
  'White',
  'Beige',
  'Gray',
  'Pink',
  'Purple'
];

const ColorSelector = ({ selected, setSelected }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
    <input
      type="text"
      list="color-options"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-800 bg-white"
      placeholder="Enter or choose a color"
    />
    <datalist id="color-options">
      {recommendedColors.map((color, index) => (
        <option key={index} value={color} />
      ))}
    </datalist>
  </div>
);

export default ColorSelector;


