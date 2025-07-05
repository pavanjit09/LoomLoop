import SupportTicket from '../models/SupportTicket.js';

/* POST /api/support */
export const createTicket = async (req, res) => {
  try {
    const { subject, category, message, attachments } = req.body;
    const ticket = await SupportTicket.create({
      user: req.user?._id,
      subject,
      category,
      message,
      attachments,
    });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit ticket' });
  }
};

/* GET /api/support (tickets for current user) */
export const getMyTickets = async (req, res) => {
  try {
    const query = req.user ? { user: req.user._id } : {};
    const tickets = await SupportTicket.find(query).sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
};

/* GET /api/support/stats */
export const getStats = async (_req, res) => {
  try {
    const pending = await SupportTicket.countDocuments({ status: 'Open' });
    // For demo, resolvedToday & avg hard‑coded 0
    res.json({ pending, resolved: 0, avg: '0' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const ticket = await SupportTicket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
};

