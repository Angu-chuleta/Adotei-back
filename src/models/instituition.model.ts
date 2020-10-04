import { Schema, model, Document } from 'mongoose';
import { IPetModel } from 'models';
import { PetSchema } from './pet.model';

export interface IInstitutionModel extends Document {
  name: string;
  foto: string;
  email: string;
  telefone: string;
  sobre: string;
  credito: number;
  valido: boolean;
  termo: string;
  pets: Array<IPetModel>;
  endereco: string;
  uf: string;
  cidade: string;
  bairro: string;
}

const InstitutionSchema = new Schema<IInstitutionModel>({
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
  endereco: {
    type: String,
    required: true,
  },
  uf: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
});

export default model<IInstitutionModel>('Institution', InstitutionSchema);
