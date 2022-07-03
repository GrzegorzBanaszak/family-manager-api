export interface Transaction {
  _id: string;
  name: string;
  user: string;
  amount: number;
  transactionType: string;
  createdAt: Date;
}
