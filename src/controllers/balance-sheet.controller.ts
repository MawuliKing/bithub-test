import { Request, Response } from "express";
import { BalanceSheetService } from "../services/balance-sheet.service";

export class BalanceSheetController {
  private balanceSheetService: BalanceSheetService;

  constructor() {
    this.balanceSheetService = new BalanceSheetService();
  }

  async getBalanceSheet(req: Request, res: Response): Promise<Response> {
    try {
      const balanceSheet = await this.balanceSheetService.getBalanceSheet();
      return res.json(balanceSheet);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  }
}
