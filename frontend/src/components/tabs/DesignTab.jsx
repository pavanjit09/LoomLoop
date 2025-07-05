import React, { useState } from 'react';
import FabricSelector from './partials/FabricSelector';
import ColorSelector from './partials/ColorSelector';
import ArtisanSelector from './partials/ArtisanSelector';
import { FiUpload, FiCheckCircle } from 'react-icons/fi';
import { createDesign } from '../../api';

const DesignTab = () => {
  const [design, setDesign] = useState(null);
  const [color, setColor] = useState('');
  const [fabric, setFabric] = useState('');
  const [selectedArtisan, setSelectedArtisan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setDesign(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    const payload = { image: design, fabric, color, artisan: selectedArtisan };
    createDesign(payload)
      .then(() => {
        setSubmitSuccess(true);
        setDesign(null);
        setFabric('');
        setColor('');
        setSelectedArtisan('');
      })
      .catch(console.error)
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Design</h2>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8">
          {design ? (
            <div className="relative group">
              <img src={design} alt="Design" className="max-w-full max-h-80 rounded-lg" />
              <button onClick={() => setDesign(null)} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full">×</button>
            </div>
          ) : (
            <>
              <FiUpload className="w-12 h-12 text-gray-400 mb-4" />
              <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Select File
                <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
              </label>
              <p className="mt-2 text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FabricSelector selected={fabric} setSelected={setFabric} />
        <ColorSelector selected={color} setSelected={setColor} />
      </div>

      <ArtisanSelector selected={selectedArtisan} setSelected={setSelectedArtisan} />

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={!design || !fabric || !color || !selectedArtisan || isSubmitting}
          className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600"
        >
          {isSubmitting ? 'Processing...' : 'Submit Design Request'}
        </button>
      </div>

      {submitSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in-up">
          <FiCheckCircle className="mr-2" />
          Design submitted successfully!
        </div>
      )}
    </div>
  );
};

export default DesignTab;

