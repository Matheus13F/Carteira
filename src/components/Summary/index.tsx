import Image from "next/image";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransaction } from "../../context/TransactionContext";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <div>
      <div className="hidden md:grid grid-cols-3 gap-8 -mt-28">
        <div className="bg-gray-100 py-6 px-8 rounded-md text-white">
          <header className="flex items-center justify-between">
            <p>Depositos</p>
            <Image src={incomeImg} alt="entrada" />
          </header>
          <strong className="block mt-4 text-3xl font-medium">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.deposits)}
          </strong>
        </div>

        <div className="bg-gray-100 py-6 px-8 rounded-md text-white">
          <header className="flex items-center justify-between">
            <p>Saidas</p>
            <Image src={outcomeImg} alt="saidas" />
          </header>
          <strong className="block mt-4 text-3xl font-medium">
            -
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.withdraw)}
          </strong>
        </div>

        <div className="bg-green py-6 px-8 rounded-md text-white">
          <header className="flex items-center justify-between">
            <p>Saldo Total</p>
            <Image src={totalImg} alt="total" />
          </header>
          <strong className="block mt-4 text-3xl font-medium">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)}
          </strong>
        </div>
      </div>

      {/* ---------------- ON MOBILE --------------------------- */}

      <div className="md:hidden flex overflow-x-scroll gap-4 -mt-28 pb-2">
        <div className="bg-gray-100 py-6 px-8 rounded-md text-white min-w-[230px]">
          <header className="flex items-center justify-between">
            <p>Depositos</p>
            <Image src={incomeImg} alt="entrada" />
          </header>
          <strong className="block mt-4 text-3xl font-medium">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.deposits)}
          </strong>
        </div>

        <div className="bg-gray-100 py-6 px-8 rounded-md text-white min-w-[230px]">
          <header className="flex items-center justify-between">
            <p>Saidas</p>
            <Image src={outcomeImg} alt="saidas" />
          </header>
          <strong className="block mt-4 text-3xl font-medium">
            -
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.withdraw)}
          </strong>
        </div>

        <div className="bg-green py-6 px-8 rounded-md text-white min-w-[230px]">
          <header className="flex items-center justify-between">
            <p>Saldo Total</p>
            <Image src={totalImg} alt="total" />
          </header>
          <strong className="block mt-4 text-3xl font-medium">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)}
          </strong>
        </div>
      </div>
    </div>
  );
}
