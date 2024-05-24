import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Transaction } from "./Transaction";
import { AccountType } from "./AccountType";
import { Inventory } from "./Inventory";

@Entity()
export class GLAccount {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  accountNumber!: string;

  @ManyToOne(() => AccountType, (accountType) => accountType.accounts)
  accountType!: AccountType;

  @OneToMany(() => Transaction, (transaction) => transaction.debitAccount)
  debitTransactions!: Transaction[];

  @OneToMany(() => Transaction, (transaction) => transaction.creditAccount)
  creditTransactions!: Transaction[];

  @OneToMany(() => Inventory, (inventory) => inventory.account)
  inventoryItems!: Inventory[];
}
