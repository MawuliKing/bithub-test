import { Repository } from "typeorm";
import { AppDataSource } from "../core/data-source";
import { GLAccount } from "../models/GLAccount";

export class GLAccountService {
  private glAccountRepository: Repository<GLAccount>;

  constructor() {
    this.glAccountRepository = AppDataSource.getRepository(GLAccount);
  }

  async getGLAccounts(): Promise<GLAccount[]> {
    return this.glAccountRepository.find({ relations: ["accountType"] });
  }
}
