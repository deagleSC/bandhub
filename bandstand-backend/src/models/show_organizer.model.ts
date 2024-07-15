import { Schema } from 'mongoose';
import User, { IUser } from './user.model';

export interface IShowOrganizer extends IUser {
  events: Schema.Types.ObjectId[];
}

const ShowOrganizerSchema = new Schema<IShowOrganizer>({
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
}, { timestamps: true });

const ShowOrganizer = User.discriminator<IShowOrganizer>('ShowOrganizer', ShowOrganizerSchema);
export default ShowOrganizer;