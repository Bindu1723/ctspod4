import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
  title: { type: String },
  id: { type: String },
  redirectURL: { type: String },
  TTL: { type: Number },
  imageURL: { type: String },
  type: { type: String },
});

export const Ad = mongoose.model('Ads', adSchema);
