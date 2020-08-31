import * as crypto from 'crypto';

import * as mongoose from 'mongoose';

const setPassword = (password: string) => {
  return crypto.createHash('sha256').update(password).digest('base64');
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, set: setPassword },
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
})

const User = mongoose.model('User', userSchema);

export default User;