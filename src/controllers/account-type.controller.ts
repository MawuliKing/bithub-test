import { Request, Response } from "express";
import { AccountTypeService } from "../services/account-type.service";

export class AccountTypeController {
  private accountTypeService: AccountTypeService;

  constructor() {
    this.accountTypeService = new AccountTypeService();
  }

  async getAllAccountTypes(req: Request, res: Response): Promise<Response> {
    try {
      const accountTypes = await this.accountTypeService.getAllAccountTypes();
      return res.json(accountTypes);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
