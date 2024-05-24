import { Repository } from "typeorm";
import { AccountType } from "../models/AccountType";
import { AppDataSource } from "../core/data-source";

export class AccountTypeService {
  private accountTypeRepository: Repository<AccountType>;

  constructor() {
    this.accountTypeRepository = AppDataSource.getRepository(AccountType);
  }

  async getAllAccountTypes(): Promise<AccountType[]> {
    return this.accountTypeRepository.find({ relations: ["accounts"] });
  }
}
