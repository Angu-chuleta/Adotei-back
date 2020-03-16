import { Request, Response } from 'express';
import { BaseService } from 'services/base.service';
import { IBaseModel } from '../models';

export abstract class BaseController<
  A extends IBaseModel,
  S extends BaseService<A>
> {
  constructor(protected service: S) {}

  getAll = async (req: Request, res: Response) => {
    try {
      const regs = await this.service.getAll();
      res.json(regs);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const model = req.body;
      const reg = await this.service.create(model);
      res.status(201).json(reg);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  update = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const model = req.body;
      const reg = await this.service.update(id, model);
      res.json(reg);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  getOne = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const reg = await this.service.getById(id);
      res.json(reg);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const reg = await this.service.delete(id);
      res.json(reg);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}
