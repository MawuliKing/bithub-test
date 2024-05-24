import { AccountType } from "../models/AccountType";
import { GLAccount } from "../models/GLAccount";
import { AppDataSource } from "./data-source";

export async function seedDatabase() {
  const accountTypeRepository = AppDataSource.getRepository(AccountType);
  const glAccountRepository = AppDataSource.getRepository(GLAccount);

  const assetType = new AccountType();
  assetType.name = "Asset";
  await accountTypeRepository.save(assetType);

  const liabilityType = new AccountType();
  liabilityType.name = "Liability";
  await accountTypeRepository.save(liabilityType);

  const equityType = new AccountType();
  equityType.name = "Equity";
  await accountTypeRepository.save(equityType);

  const revenueType = new AccountType();
  revenueType.name = "Revenue";
  await accountTypeRepository.save(revenueType);

  const expenseType = new AccountType();
  expenseType.name = "Expense";
  await accountTypeRepository.save(expenseType);

  const cashAccount = new GLAccount();
  cashAccount.name = "Cash";
  cashAccount.accountNumber = "1000";
  cashAccount.accountType = assetType;
  await glAccountRepository.save(cashAccount);

  const inventoryAccount = new GLAccount();
  inventoryAccount.name = "Inventory";
  inventoryAccount.accountNumber = "1010";
  inventoryAccount.accountType = assetType;
  await glAccountRepository.save(inventoryAccount);

  const capitalAccount = new GLAccount();
  capitalAccount.name = "Opening Capital";
  capitalAccount.accountNumber = "3000";
  capitalAccount.accountType = equityType;
  await glAccountRepository.save(capitalAccount);

  const salesRevenueAccount = new GLAccount();
  salesRevenueAccount.name = "Sales Revenue";
  salesRevenueAccount.accountNumber = "4000";
  salesRevenueAccount.accountType = revenueType;
  await glAccountRepository.save(salesRevenueAccount);

  const cogsAccount = new GLAccount();
  cogsAccount.name = "Cost of Goods Sold";
  cogsAccount.accountNumber = "5000";
  cogsAccount.accountType = expenseType;
  await glAccountRepository.save(cogsAccount);
}
