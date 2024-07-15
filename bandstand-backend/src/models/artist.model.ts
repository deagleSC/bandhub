import { Schema } from 'mongoose';
import User, { IUser } from './user.model';

export interface IArtist extends IUser {
  bio?: string;
  genres: string[];
  albums: Schema.Types.ObjectId[];
  tracks: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
}

const ArtistSchema = new Schema<IArtist>({
  bio: { type: String },
  genres: [{ type: String }],
  albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
  tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

const Artist = User.discriminator<IArtist>('Artist', ArtistSchema);
export default Artist;