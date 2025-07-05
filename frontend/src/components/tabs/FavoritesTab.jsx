// File: src/components/tabs/FavoritesTab.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFavorites, deleteFavorite } from '../../api';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';

const FavoritesTab = () => {
  const navigate = useNavigate();
  const [favs,    setFavs]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  /* ---- fetch once ---- */
  useEffect(() => {
    (async () => {
      try {
        setFavs(await getFavorites());
      } catch (e) {
        console.error(e);
        setError('Failed to load favorites.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onRemove = async (favId) => {
    if (!window.confirm('Remove this design from favorites?')) return;
    try {
      await deleteFavorite(favId);
      setFavs((prev) => prev.filter((f) => f._id !== favId));
    } catch {
      alert('Failed to remove favorite.');
    }
  };

  /* ---- guards ---- */
  if (loading) return <p className="p-6">Loading favorites…</p>;
  if (error)   return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-300">
        <button
          onClick={() => navigate('/design-studio')}
          className="flex items-center px-5 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          <FiArrowLeft className="mr-3 text-black" size={18} />
          <span className="font-bold tracking-wide text-black">BACK TO STUDIO</span>
        </button>
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
          FAVORITES
        </h1>
        <div className="w-10" />
      </div>

      {/* Empty state */}
      {favs.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-800 text-lg font-medium">You haven't added any favorites yet.</p>
        </div>
      ) : (
        /* Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favs.map(({ _id, design }) => (
            <div
              key={_id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Square image container */}
              <div className="relative w-full overflow-hidden" style={{ paddingTop: '100%' }}>
                <img
                  src={design.image}
                  alt={design.fabric}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-gray-900 font-semibold truncate">{design.fabric}</h3>
                <p className="text-xs text-gray-600 mb-2">Color: {design.color}</p>

                {/* Spacer pushes button to bottom on equal height cards */}
                <div className="flex-grow" />

                <button
                  onClick={() => onRemove(_id)}
                  className="w-full text-sm flex items-center justify-center text-red-700 hover:text-red-900 border border-red-600 hover:border-red-800 rounded py-2 transition"
                >
                  <FiTrash2 className="mr-1" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesTab;

