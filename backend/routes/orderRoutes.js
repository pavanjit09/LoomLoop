import express from 'express';
import { createOrder, getOrders, cancelOrder } from '../controllers/orderController.js';
import { deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);        // place new order
router.get('/', getOrders);           // list user orders
router.put('/:id/cancel', cancelOrder); // cancel
router.delete('/:id', deleteOrder); 

export default router;
