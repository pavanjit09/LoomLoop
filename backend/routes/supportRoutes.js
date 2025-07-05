import express from 'express';
import { createTicket, getMyTickets, getStats, deleteTicket } from '../controllers/supportController.js';

const router = express.Router();

router.post('/', createTicket);
router.get('/',  getMyTickets);
router.get('/stats', getStats);
router.delete('/:id', deleteTicket); 

export default router;
