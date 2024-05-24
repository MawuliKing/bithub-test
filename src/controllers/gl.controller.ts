import { Request, Response } from "express";
import { GLAccountService } from "../services/gl.service";

export class GLAccountController {
  private glAccountService: GLAccountService;

  constructor() {
    this.glAccountService = new GLAccountService();
  }

  async getGLAccounts(req: Request, res: Response): Promise<Response> {
    try {
      const accounts = await this.glAccountService.getGLAccounts();
      return res.json(accounts);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
