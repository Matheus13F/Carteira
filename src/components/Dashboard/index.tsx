import { Summary } from "../Summary";
import { TransactionsTable } from "../Transactions";

export function Dashboard() {
  return (
    <div className="max-w-7xl my-0 mx-auto py-10 px-4">
      <Summary />
      <TransactionsTable />
    </div>
  );
}
