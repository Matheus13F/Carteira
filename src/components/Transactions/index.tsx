import { useState } from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiCalendar,
  FiSearch,
  FiTag,
} from "react-icons/fi";
import ClassNames from "clsx";
import Pagination from "../Pagination";

export function TransactionsTable() {
  const [search, setSearch] = useState("");

  const dataMock = [
    {
      id: 1,
      title: "Comida",
      amount: 100,
      category: "Alimentação",
      createdAt: new Date(),
      type: "deposit",
    },
    {
      id: 2,
      title: "Shein",
      amount: 249,
      category: "Roupas",
      createdAt: new Date(),
      type: "withdraw",
    },
    {
      id: 3,
      title: "Teclado",
      amount: 215,
      category: "Computador",
      createdAt: new Date(),
      type: "withdraw",
    },
  ];

  const filtered =
    search.length > 0
      ? dataMock.filter((content) => content.title.includes(search))
      : dataMock;

  return (
    <div className="w-full mt-10">
      <div className="py-4 flex">
        <input
          type="text"
          className="w-full px-4 py-3 bg-black rounded-md text-white"
          placeholder="Busque uma transação."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className="text-yellow flex items-center py-2 px-4 gap-2 border-[1px] border-yellow ml-4 rounded-md focus:border-0"
        >
          <FiSearch color="#eba417" />
          <span className="hidden md:flex">Pesquisar</span>
        </button>
      </div>

      {/* CONTENT OF HISTORY */}
      {filtered.map((item) => (
        <div key={item.id}>
          <div className="bg-gray-300 rounded-md my-2 hidden md:grid grid-cols-4">
            <span className="py-4 px-8 border-0 text-white">{item.title}</span>

            <span
              className={ClassNames(
                "py-2 px-5 border-0 flex items-center gap-1",
                {
                  "text-green": item.type === "deposit",
                  "text-red": item.type !== "deposit",
                }
              )}
            >
              {item.type === "withdraw" ? <FiArrowDown /> : <FiArrowUp />}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.amount)}
            </span>
            <span className="py-4 px-8 border-0 text-white">
              {item.category}
            </span>
            <span className="py-4 px-8 border-0 text-white">
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(item.createdAt)
              )}
            </span>
          </div>

          {/*-----------------------  ON MOBILE ------------------------------------  */}
          <div className="flex flex-col md:hidden bg-gray-300 rounded-md my-2">
            <span className="py-2 px-5 border-0 text-gray-900">
              {item.title}
            </span>

            <span
              className={ClassNames(
                "py-2 px-5 border-0 text-2xl flex items-center gap-1",
                {
                  "text-green": item.type === "deposit",
                  "text-red": item.type !== "deposit",
                }
              )}
            >
              {item.type === "withdraw" ? (
                <FiArrowDown size={15} />
              ) : (
                <FiArrowUp size={15} />
              )}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.amount)}
            </span>
            <div className="flex justify-between">
              <span className="py-2 px-5 border-0 text-gray-950 flex items-center gap-1">
                <FiTag />
                {item.category}
              </span>
              <span className="py-2 px-5 border-0 text-gray-950 flex items-center gap-1">
                <FiCalendar />
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(item.createdAt)
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  );
}
