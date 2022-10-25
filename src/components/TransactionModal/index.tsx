import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import classNames from "clsx";
import Image from "next/image";
import styles from "./modal.module.css";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

Modal.setAppElement("#__next");

export function TransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  function newTransaction(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.overlay}
      className="w-full max-w-xl bg-gray-600 p-10 relative rounded-md"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="absolute right-6 top-6 border-0 bg-transparent hover:opacity-80 transition-colors"
      >
        <Image src={closeImg} alt="Close Modal" />
      </button>
      <form onSubmit={newTransaction}>
        <h2 className="text-white text-2xl mb-8">Cadastrar Transação</h2>
        <input
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full py-0 px-6 h-16 rounded-md border-[1px] focus:outline-none focus:border-b-yellow
           border-gray-300 text-white bg-gray-100 font-medium text-base placeholder:text-white"
        />
        <input
          placeholder="Amount"
          required
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full py-0 px-6 h-16 rounded-md text-white bg-gray-100 font-medium text-base placeholder:text-white mt-4"
        />
        <input
          placeholder="Category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full py-0 px-6 h-16 rounded-md text-white bg-gray-100 font-medium text-base placeholder:text-white mt-4"
        />
        <div className="my-4 mx-0 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setType("deposit")}
            className={classNames(
              "h-16 border-[1px] border-gray-300 rounded-md flex items-center justify-center",
              {
                "border-2 border-green": type === "deposit",
              }
            )}
          >
            <Image src={incomeImg} alt="Entrada" className="w-5 h-5" />
            <span className="inline-block ml-4 text-base text-white">
              Entrada
            </span>
          </button>

          <button
            type="button"
            onClick={() => setType("withdraw")}
            className={classNames(
              "h-16 border-[1px] border-gray-300 rounded-md flex items-center justify-center",
              {
                "border-2 border-red": type === "withdraw",
              }
            )}
          >
            <Image src={outcomeImg} alt="Saida" className="w-5 h-5" />
            <span className="inline-block ml-4 text-base text-white">
              Saida
            </span>
          </button>
        </div>
        <button
          className="w-full py-0 px-6 h-16 bg-green text-white rounded-md border-0 text-base mt-6 font-semibold hover:opacity-90 transition-opacity"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}
