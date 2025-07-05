// File: backend/controllers/orderController.js
import Order from '../models/Order.js';

/**
 * POST /api/orders
 * body: { designId }
 */
export const createOrder = async (req, res) => {
  try {
    const { designId } = req.body;

    // 💡  Default status comes from the schema ("In production")
    let order = await Order.create({
      design: designId,
      user: req.user?._id || undefined,
    });

    order = await order.populate('design');
    return res.status(201).json(order);
  } catch (err) {
    return res.status(500).json({
      error: 'Failed to place order',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const query = req.user ? { user: req.user._id } : {};
    const orders = await Order.find(query)
      .populate('design')
      .sort({ createdAt: -1 });

    return res.json(orders);
  } catch (err) {
    return res.status(500).json({
      error: 'Failed to fetch orders',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: 'Cancelled', cancelledAt: new Date() },
      { new: true },
    ).populate('design');

    if (!order) return res.status(404).json({ error: 'Order not found' });

    return res.json(order);
  } catch (err) {
    return res.status(500).json({
      error: 'Failed to cancel order',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({
      error: 'Failed to delete order',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }
};
