import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";

export class TransactionController {
  private transactionService: TransactionService;

  constructor() {
    this.transactionService = new TransactionService();
  }

  async createTransaction(req: Request, res: Response): Promise<Response> {
    const { amount, debitAccountId, creditAccountId } = req.body;
    try {
      const transaction = await this.transactionService.createTransaction(
        amount,
        debitAccountId,
        creditAccountId
      );
      return res.json(transaction);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
