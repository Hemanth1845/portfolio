import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema(
  {
    visitedAt: {
      type: Date,
      default: Date.now
    },
    userAgent: String,
    path: {
      type: String,
      default: '/'
    }
  },
  {
    timestamps: true
  }
);

export const Visitor = mongoose.model('Visitor', visitorSchema);

