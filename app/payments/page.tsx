import { Payment, columns } from "./column";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return Array(30)
    .fill(0)
    .map((num, index) => ({
      id: `${index}28ed52f`,
      amount: 100 - index,
      status: "pending",
      email: `m${index}@example.com`,
    }));
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
