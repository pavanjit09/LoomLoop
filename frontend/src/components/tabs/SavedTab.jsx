import React, { useEffect, useState } from 'react';
import { getDesigns, deleteDesign, updateDesign } from '../../api';
import DesignModal from '../DesignModal';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import OrderConfirmModal from '../OrderConfirmModal';
import { createOrder } from '../../api';
import { addFavorite } from '../../api';
import { FiHeart } from 'react-icons/fi';

const SavedTab = ({ setCurrentTab }) => {
  const [savedDesigns, setSavedDesigns] = useState([]);
  const [editing, setEditing] = useState(null);
  const [ordering, setOrdering] = useState(null);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getDesigns().then(setSavedDesigns);
  };

  const onDelete = (id) => {
    deleteDesign(id).then(refresh);
  };

  const onEdit = (design) => {
    setEditing(design);
  };

  const onSave = (updated) => {
    updateDesign(updated._id, updated).then(() => {
      setEditing(null);
      refresh();
    });
  };

  const placeOrder = async (design) => {
    try {
      await createOrder(design._id);
      setOrdering(null);
      alert('✅ Order placed!');
    } catch (e) {
      alert('❌ Failed to place order. Please try again.');
      console.error(e);
    }
  };

  return (
    <div className="p-6">
      {editing && <DesignModal design={editing} onClose={() => setEditing(null)} onSave={onSave} />}

      {ordering && (
        <OrderConfirmModal
          design={ordering}
          onClose={() => setOrdering(null)}
          onConfirm={() => placeOrder(ordering)}
        />
      )}

      {savedDesigns.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No saved designs yet.</p>
          <button
            onClick={() => setCurrentTab('design')}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Create New Design
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedDesigns.map((d) => (
            <div
              key={d._id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-100 flex justify-center items-center overflow-hidden">
                <img
                  src={d.image}
                  alt="Design"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-sm font-medium text-gray-800 truncate">{d.fabric}</h3>
                <p className="text-xs text-gray-600">Color: {d.color}</p>
                <p className="text-xs text-gray-500">Artisan: {d.artisan}</p>
              </div>
              <div className="space-y-2 px-4 pb-4">
                {/* Row 1: Edit, Order, Delete */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => onEdit(d)}
                    className="text-green-600 hover:text-green-800 text-sm flex items-center"
                  >
                    <FiEdit2 className="mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => setOrdering(d)}
                    className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center"
                  >
                    Order
                  </button>
                  <button
                    onClick={() => onDelete(d._id)}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center"
                  >
                    <FiTrash2 className="mr-1" /> Delete
                  </button>
                </div>

                {/* Row 2: Favorite (full width) */}
                <button
                  onClick={() => addFavorite(d._id).then(() => alert('Added to favorites!'))}
                  className="w-full text-pink-600 hover:text-pink-800 text-sm flex items-center justify-center"
                >
                  <FiHeart className="mr-1" /> Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedTab;


