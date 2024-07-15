import { Schema, model, Document } from 'mongoose';

export interface IAlbum extends Document {
  title: string;
  artist: Schema.Types.ObjectId;
  releaseDate: Date;
  coverImageUrl?: string;
  tracks: Schema.Types.ObjectId[];
}

const AlbumSchema = new Schema<IAlbum>({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
  releaseDate: { type: Date, required: true },
  coverImageUrl: { type: String },
  tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }]
}, { timestamps: true });

const Album = model<IAlbum>('Album', AlbumSchema);
export default Album;