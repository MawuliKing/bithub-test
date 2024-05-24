import { Router } from "express";
import { InventoryController } from "../controllers/inventory.controller";
import { GLAccountController } from "../controllers/gl.controller";
import { AccountTypeController } from "../controllers/account-type.controller";
import { TransactionController } from "../controllers/transaction.controller";
import { BalanceSheetController } from "../controllers/balance-sheet.controller";
const apiRouter = Router();

const inventoryController = new InventoryController();
const glAccountController = new GLAccountController();
const accountTypeController = new AccountTypeController();
const transactionController = new TransactionController();
const balanceSheetController = new BalanceSheetController();

apiRouter.post("/inventory", (req, res) =>
  inventoryController.addInventory(req, res)
);
apiRouter.get("/inventory", (req, res) =>
  inventoryController.getStoreInventoryItems(req, res)
);

apiRouter.get("/gl-accounts", (req, res) =>
  glAccountController.getGLAccounts(req, res)
);

apiRouter.get("/account-types", (req, res) =>
  accountTypeController.getAllAccountTypes(req, res)
);

apiRouter.post("/transaction", (req, res) =>
  transactionController.createTransaction(req, res)
);

apiRouter.get("/balance-sheet", (req, res) =>
  balanceSheetController.getBalanceSheet(req, res)
);

export default apiRouter;
