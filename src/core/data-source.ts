import { DataSource } from "typeorm";
import { AccountType } from "../models/AccountType";
import { Inventory } from "../models/Inventory";
import { GLAccount } from "../models/GLAccount";
import { Transaction } from "../models/Transaction";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [AccountType, Inventory, GLAccount, Transaction],
  migrations: [],
  subscribers: [],
});
