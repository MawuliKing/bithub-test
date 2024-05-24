import { Repository } from "typeorm";
import { Transaction } from "../models/Transaction";
import { GLAccount } from "../models/GLAccount";
import { AppDataSource } from "../core/data-source";

export class TransactionService {
  private transactionRepository: Repository<Transaction>;
  private glAccountRepository: Repository<GLAccount>;

  constructor() {
    this.transactionRepository = AppDataSource.getRepository(Transaction);
    this.glAccountRepository = AppDataSource.getRepository(GLAccount);
  }

  async createTransaction(
    amount: number,
    debitAccountId: number,
    creditAccountId: number
  ): Promise<Transaction> {
    const debitAccount = await this.glAccountRepository.findOneBy({
      id: debitAccountId,
    });
    const creditAccount = await this.glAccountRepository.findOneBy({
      id: creditAccountId,
    });

    if (!debitAccount || !creditAccount) {
      throw new Error("GL Account not found");
    }

    const transaction = new Transaction();
    transaction.amount = amount;
    transaction.debitAccount = debitAccount;
    transaction.creditAccount = creditAccount;
    transaction.date = new Date();

    return this.transactionRepository.save(transaction);
  }
}
