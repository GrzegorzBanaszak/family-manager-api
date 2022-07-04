import { Transaction } from "./Transaction";

export interface TransactionDto {
  transactions: Transaction[];
  cash: number;
}
