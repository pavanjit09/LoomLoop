import express from 'express';
import {
  createDesign,
  getDesigns,
  updateDesign,
  deleteDesign
} from '../controllers/designController.js';

const router = express.Router();

router.post('/', createDesign);
router.get('/', getDesigns);
router.put('/:id', updateDesign);
router.delete('/:id', deleteDesign);

export default router;
