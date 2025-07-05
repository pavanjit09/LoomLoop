import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    design: { type: mongoose.Schema.Types.ObjectId, ref: 'Design', required: true },
    status: { type: String, default: 'In production', enum: ['In production', 'Processing', 'Cancelled'] },
    placedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
