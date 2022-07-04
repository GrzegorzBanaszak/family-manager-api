import { Transaction } from "./Transaction";

export interface TransactionMoneyDto {
  id: string;
  transactions: Transaction[];
  cash: number;
}
