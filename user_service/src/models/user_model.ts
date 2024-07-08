// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  userID: string;
  preferences: string[];
  email: string;
}

const UserSchema: Schema = new Schema({
  userID: { type: String, required: true },
  preferences: { type: [String], required: true },
  email: { type: String, required: true },
});

export default mongoose.model<User>('User', UserSchema);
