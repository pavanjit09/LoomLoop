import mongoose from 'mongoose';

const AttachmentSchema = new mongoose.Schema(
  {
    filename: String,
    data: String, // base64 string (for demo ‑ no S3)
  },
  { _id: false }
);

const SupportTicketSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    subject: { type: String, required: true },
    category: {
      type: String,
      enum: ['Order Issue', 'Technical Problem', 'Refund Request', 'General'],
      default: 'General',
    },
    message: { type: String, required: true },
    attachments: [AttachmentSchema],
    status: { type: String, enum: ['Open', 'Resolved'], default: 'Open' },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('SupportTicket', SupportTicketSchema);
