import express from 'express';
import {
  addFavorite,
  getFavorites,
  removeFavorite,
  getStats,
} from '../controllers/favoriteController.js';

const router = express.Router();

router.post('/', addFavorite);
router.get('/',  getFavorites);
router.delete('/:id', removeFavorite);
router.get('/stats', getStats);

export default router;
