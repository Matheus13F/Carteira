import Head from "next/head";
import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { TransactionModal } from "../components/TransactionModal";

const Home = () => {
  const [isNewTransactionModalOpen, setIsTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  return (
    <>
      <Head>
        <title>Carteira.Online</title>
      </Head>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
};

export default Home;
