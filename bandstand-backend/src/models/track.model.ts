import { Schema, model, Document } from 'mongoose';

export interface ITrack extends Document {
  title: string;
  artist: Schema.Types.ObjectId;
  album?: Schema.Types.ObjectId;
  duration: number;
  genre: string;
  fileUrl: string;
  lyrics?: string;
  plays: number;
  likes: number;
}

const TrackSchema = new Schema<ITrack>({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
  album: { type: Schema.Types.ObjectId, ref: 'Album' },
  duration: { type: Number, required: true },
  genre: { type: String, required: true },
  fileUrl: { type: String, required: true },
  lyrics: { type: String },
  plays: { type: Number, default: 0 },
  likes: { type: Number, default: 0 }
}, { timestamps: true });

const Track = model<ITrack>('Track', TrackSchema);
export default Track;