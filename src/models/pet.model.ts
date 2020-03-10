import { Schema, model, Document } from 'mongoose';

interface IPetModel extends Document {
  name: string;
}

const PetSchema = new Schema<IPetModel>({
  name: {
    type: String,
    required: true,
  },
});

export default model<IPetModel>('Pet', PetSchema);
