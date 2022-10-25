export interface ITransaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

export type INewTransaction = Omit<ITransaction, "id" | "createdAt">;

export interface TransactionsContextData {
  transactions: ITransaction[];
  createNewtransaction: (transaction: INewTransaction) => Promise<void>;
}
