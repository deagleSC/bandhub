import { Schema } from 'mongoose';
import User, { IUser } from './user.model';

export interface IRecordLabel extends IUser {
  artists: Schema.Types.ObjectId[];
}

const RecordLabelSchema = new Schema<IRecordLabel>({
  artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }]
}, { timestamps: true });

const RecordLabel = User.discriminator<IRecordLabel>('RecordLabel', RecordLabelSchema);
export default RecordLabel;