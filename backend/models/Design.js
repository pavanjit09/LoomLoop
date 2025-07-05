import mongoose from 'mongoose';

const DesignSchema = new mongoose.Schema({
  image: String,
  fabric: String,
  color: String,
  artisan: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Design', DesignSchema);
