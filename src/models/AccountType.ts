import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { GLAccount } from "./GLAccount";

@Entity()
export class AccountType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => GLAccount, (account) => account.accountType)
  accounts!: GLAccount[];
}
