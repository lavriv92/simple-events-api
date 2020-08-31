import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: 'User' },
  description: { type: String, required: true },
  startsAt: { type: Date, default: Date.now },
  endsAt: { type: Date, default: Date.now }
});

const Event = mongoose.model('event', eventSchema);

export default Event;