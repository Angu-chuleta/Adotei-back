import { IBaseModel } from '../models';
import { Model } from 'mongoose';
export abstract class BaseService<A extends IBaseModel> {
  constructor(protected BaseModel: Model<A>) {}
  async getAll() {
    const res = await this.BaseModel.find();
    return res;
  }
  async getById(id: string) {
    try {
      const reg = await this.BaseModel.findById(id);
      if (reg) {
        return reg;
      }
      throw { message: 'Objeto não encontrado' };
    } catch (error) {
      throw { message: 'Objeto não encontrado' };
    }
  }
  async create(model: Object) {
    try {
      const res = await this.BaseModel.create(model);
      return res;
    } catch (error) {
      throw { message: 'Erro ao criar Objeto' };
    }
  }
  async delete(id: string) {
    try {
      const reg = await this.BaseModel.findByIdAndRemove({ _id: id }).exec();
      if (reg) {
        return reg;
      }
      throw { message: 'Objeto não encontrado' };
    } catch (e) {
      throw { message: 'Objeto não encontrado' };
    }
  }
  async update(id: string, model: Object) {
    try {
      const reg = await this.BaseModel.findById(id);
      if (reg) {
        const res = await reg.save();
        return res;
      }
      throw { message: 'Objeto não encontrado' };
    } catch (error) {
      throw { message: 'Objeto não encontrado' };
    }
  }
}
