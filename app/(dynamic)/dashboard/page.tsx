import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-bold">Dashboard</h2>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
