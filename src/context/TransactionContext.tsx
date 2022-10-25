import { createContext, ReactNode, useContext, useState } from "react";
import {
  INewTransaction,
  ITransaction,
  TransactionsContextData,
} from "./types";

interface ITransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  // useEffect(() => {
  //   api
  //     .get("/transactions")
  //     .then((res) => setTransactions(res.data.transactions));
  // }, []);

  async function createNewtransaction(transactionInput: INewTransaction) {
    // const response = await api.post("/transactions", {
    //   ...transactionInput,
    //   createdAt: new Date(),
    // });
    // const { transaction } = response.data;
    // setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createNewtransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  return context;
}
