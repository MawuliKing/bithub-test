import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { GLAccount } from "./GLAccount";

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  quantity!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  cost!: number;

  @ManyToOne(() => GLAccount, (account) => account.inventoryItems)
  account!: GLAccount;
}
