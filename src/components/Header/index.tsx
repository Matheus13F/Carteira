import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import logoCoImg from "../../assets/logoco.svg";

interface IHeaderProps {
  onOpenNewTransactionModal(): void;
}

export function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <header className="bg-black">
      <div className="hidden max-w-7xl my-0 mx-auto px-4 pt-8 pb-32 md:flex items-center justify-between">
        <Image src={logoImg} alt="Carteira" width={200} height={100} />
        <button
          onClick={onOpenNewTransactionModal}
          className="text-white text-base bg-yellow border-0 py-0 px-8 rounded-md h-12 hover:opacity-90 transition-opacity"
        >
          Nova Transação
        </button>
      </div>

      {/* ----------------- ON MOBILE ----------------------- */}
      <div className="max-w-7xl my-0 mx-auto px-4 pt-8 pb-32 flex md:hidden items-center justify-between">
        <Image src={logoCoImg} alt="Carteira" width={100} height={50} />
        <button
          onClick={onOpenNewTransactionModal}
          className="text-white text-base bg-yellow border-0 py-0 px-8 rounded-md h-12 hover:opacity-90 transition-opacity"
        >
          + Transação
        </button>
      </div>
    </header>
  );
}
