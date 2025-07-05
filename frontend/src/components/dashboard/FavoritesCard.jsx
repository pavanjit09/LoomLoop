import React from 'react';
import { FiHeart, FiBookmark } from 'react-icons/fi';

const FavoritesCard = ({
  savedDesigns = 0,
  favoriteProducts = 0,
  lastAdded = '—',
  onViewFavorites = () => {},
}) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md bg-white">
    <div className="flex items-center mb-4">
      <div className="bg-purple-100 p-3 rounded-full mr-4">
        <FiHeart className="text-purple-600 text-xl" />
      </div>
      <h3 className="text-lg font-medium text-gray-800">Your Favorites</h3>
    </div>

    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Saved Designs</span>
        <span className="font-medium text-gray-800">{savedDesigns}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Favorite Products</span>
        <span className="font-medium text-gray-800">{favoriteProducts}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Last Added</span>
        <span className="font-medium text-gray-800">{lastAdded}</span>
      </div>
    </div>

    <button
      onClick={onViewFavorites}
      className="mt-6 w-full py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 flex items-center justify-center"
    >
      <FiBookmark className="mr-2" /> View Favorites
    </button>
  </div>
);

export default FavoritesCard;
