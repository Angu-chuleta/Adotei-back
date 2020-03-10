import { Request, Response } from 'express';
import { PetModel } from '../models';
export const petController = {
  async getAllPet(req: Request, res: Response) {
    res.json(await PetModel.find());
  },

  async createPet(req: Request, res: Response) {
    const { name } = req.body;

    try {
      const pet = await PetModel.create({
        name,
      });
      res.status(201).json(pet);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar pet' });
    }
  },
  async updatePet(req: Request, res: Response) {
    const petId = req.params.id;

    const { name } = req.body;
    try {
      const pet = await PetModel.findById(petId);
      if (pet) {
        pet.name = name;
        res.json(await pet.save());
      }
      res.status(400).json({ message: 'Pet não encontrado' });
    } catch (error) {
      res.status(400).json({ message: 'Pet não encontrado' });
    }
  },
  async getOnePet(req: Request, res: Response) {
    const petId = req.params.id;
    try {
      const pet = await PetModel.findById(petId);
      if (pet) {
        res.json(await pet.save());
      }
      res.status(400).json({ message: 'Pet não encontrado' });
    } catch (error) {
      res.status(400).json({ message: 'Pet não encontrado' });
    }
  },
  async deletePet(req: Request, res: Response) {
    try {
      const pet = await PetModel.findByIdAndRemove({
        _id: req.params.id,
      }).exec();
      if (pet) {
        res.json(pet);
      }
      res.status(400).json({ message: 'Pet não encontrado' });
    } catch (e) {
      res.status(400).json({ message: 'ID' });
    }
  },
};
