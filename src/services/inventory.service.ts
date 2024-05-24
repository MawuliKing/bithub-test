import { Repository } from "typeorm";
import { AppDataSource } from "../core/data-source";
import { Inventory } from "../models/Inventory";
import { GLAccount } from "../models/GLAccount";

export class InventoryService {
  private inventoryRepository: Repository<Inventory>;
  private glAccountRepository: Repository<GLAccount>;

  constructor() {
    this.inventoryRepository = AppDataSource.getRepository(Inventory);
    this.glAccountRepository = AppDataSource.getRepository(GLAccount);
  }

  async addInventory(
    name: string,
    quantity: number,
    cost: number,
    accountId: number
  ): Promise<Inventory> {
    const account = await this.glAccountRepository.findOneBy({ id: accountId });
    if (!account) {
      throw new Error("GL Account not found");
    }

    const inventory = new Inventory();
    inventory.name = name;
    inventory.quantity = quantity;
    inventory.cost = cost;
    inventory.account = account;

    return this.inventoryRepository.save(inventory);
  }

  async getStoreInventoryItems(): Promise<Inventory[]> {
    return this.inventoryRepository.find({ relations: ["account"] });
  }
}
