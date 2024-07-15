import { Schema } from 'mongoose';
import User, { IUser } from './user.model';

export interface IListener extends IUser {
  favoriteGenres: string[];
  playlists: Schema.Types.ObjectId[];
}

const ListenerSchema = new Schema<IListener>({
  favoriteGenres: [{ type: String }],
  playlists: [{ type: Schema.Types.ObjectId, ref: 'Playlist' }]
}, { timestamps: true });

const Listener = User.discriminator<IListener>('Listener', ListenerSchema);
export default Listener;