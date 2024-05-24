import { Request, Response } from "express";
import { InventoryService } from "../services/inventory.service";

export class InventoryController {
  private inventoryService: InventoryService;

  constructor() {
    this.inventoryService = new InventoryService();
  }

  async addInventory(req: Request, res: Response): Promise<Response> {
    const { name, quantity, cost, accountId } = req.body;
    try {
      const inventory = await this.inventoryService.addInventory(
        name,
        quantity,
        cost,
        accountId
      );
      return res.json(inventory);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  async getStoreInventoryItems(req: Request, res: Response): Promise<Response> {
    try {
      const inventoryItems =
        await this.inventoryService.getStoreInventoryItems();
      return res.json(inventoryItems);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
