import React, { useState } from 'react';
import FabricSelector from './tabs/partials/FabricSelector';
import ColorSelector from './tabs/partials/ColorSelector';
import ArtisanSelector from './tabs/partials/ArtisanSelector';

const DesignModal = ({ design, onClose, onSave }) => {
  const [image, setImage] = useState(design.image);
  const [fabric, setFabric] = useState(design.fabric);
  const [color, setColor] = useState(design.color);
  const [artisan, setArtisan] = useState(design.artisan);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => setImage(fr.result);
    fr.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Edit Design</h2>

        <div className="mb-4">
          {image && (
            <img
              src={image}
              alt="Design Preview"
              className="max-h-48 w-full object-cover rounded-md mb-2"
            />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <FabricSelector selected={fabric} setSelected={setFabric} />
        <ColorSelector selected={color} setSelected={setColor} />
        <ArtisanSelector selected={artisan} setSelected={setArtisan} />

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              onSave({ ...design, image, fabric, color, artisan })
            }
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignModal;

