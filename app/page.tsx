import { auth } from "@/auth";
export const dynamic = "force-static";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-bold">Homepage</h2>
      <p>{JSON.stringify(session?.user)}</p>
    </div>
  );
}
