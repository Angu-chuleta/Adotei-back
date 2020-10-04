import { Schema, model, Document } from 'mongoose';
export interface IAuthModel extends Document {
  username: string;
  password: string;
  role: number;
}

const AuthSchema = new Schema<IAuthModel>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { type: Number, required: true },
});

export default model<IAuthModel>('Auth', AuthSchema);
