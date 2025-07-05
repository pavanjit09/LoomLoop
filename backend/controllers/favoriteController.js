import Favorite from '../models/Favorite.js';

/* POST /api/favorites { designId } */
export const addFavorite = async (req, res) => {
  try {
    const fav = await Favorite.create({
      user: req.user?._id,
      design: req.body.designId,
    });
    res.status(201).json(fav);
  } catch (err) {
    // Duplicate key error = already favorited
    if (err.code === 11000) return res.status(200).json({ duplicate: true });
    res.status(500).json({ error: 'Failed to add favorite' });
  }
};

/* GET /api/favorites */
export const getFavorites = async (req, res) => {
  try {
    const query = req.user ? { user: req.user._id } : {};
    const favorites = await Favorite.find(query)
      .populate('design')
      .sort({ createdAt: -1 });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
};

/* DELETE /api/favorites/:id (fav id) */
export const removeFavorite = async (req, res) => {
  try {
    const fav = await Favorite.findByIdAndDelete(req.params.id);
    if (!fav) return res.status(404).json({ error: 'Favorite not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove favorite' });
  }
};

/* GET /api/favorites/stats -> { count, lastAdded } */
export const getStats = async (req, res) => {
  try {
    const query = req.user ? { user: req.user._id } : {};
    const count = await Favorite.countDocuments(query);
    const last = await Favorite.findOne(query).sort({ createdAt: -1 });
    res.json({
      count,
      lastAdded: last ? last.createdAt : null,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};
