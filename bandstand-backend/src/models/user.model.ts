import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  userType: 'artist' | 'listener' | 'recordLabel' | 'showOrganizer';
  profilePicture?: string;
  socialLinks?: {
    [key: string]: string;
  };
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  profilePicture: { type: String },
  socialLinks: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String }
  }
}, { timestamps: true });

const User = model<IUser>('User', UserSchema);
export default User;