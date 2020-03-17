import { Request, Response } from 'express';
import { TransactionService, transactionService } from '../services';
import { BaseController } from './base.controller';
import { ITransactionModel } from '../models';

class TransactionController extends BaseController<
  ITransactionModel,
  TransactionService
> {
  constructor() {
    super(transactionService);
  }
}

export const transactionController = new TransactionController();
