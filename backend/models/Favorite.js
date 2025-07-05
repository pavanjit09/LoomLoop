import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema(
  {
    user:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    design: { type: mongoose.Schema.Types.ObjectId, ref: 'Design', required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

/* Don't allow the same design to be favorited twice by the same user */
FavoriteSchema.index({ user: 1, design: 1 }, { unique: true });

export default mongoose.model('Favorite', FavoriteSchema);
