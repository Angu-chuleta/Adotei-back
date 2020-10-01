import { Schema, model, Document } from 'mongoose';
import { IPetModel } from 'models';
import { PetSchema } from './pet.model';

export interface IInstituitionModel extends Document {
  name: string;
  foto: string;
  email: string;
  telefone: string;
  sobre: string;
  credito: number;
  valido: boolean;
  termo: string;
  pets: Array<IPetModel>;
}

const InstituitionSchema = new Schema<IInstituitionModel>({
  name: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  sobre: {
    type: String,
    required: true,
  },
  credito: {
    type: Number,
    required: true,
  },
  valido: {
    type: Boolean,
    required: true,
  },
  termo: {
    type: String,
    required: true,
  },
  pets: {
    type: [PetSchema],
    default: [],
  },
});

export default model<IInstituitionModel>('Instituition', InstituitionSchema);
