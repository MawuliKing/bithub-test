import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { GLAccount } from "./GLAccount";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  date!: Date;

  @Column("decimal", { precision: 10, scale: 2 })
  amount!: number;

  @ManyToOne(() => GLAccount, (account) => account.debitTransactions)
  debitAccount!: GLAccount;

  @ManyToOne(() => GLAccount, (account) => account.creditTransactions)
  creditAccount!: GLAccount;
}
