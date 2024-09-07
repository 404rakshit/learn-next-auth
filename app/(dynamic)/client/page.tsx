"use client";

import { useSession } from "next-auth/react";

export default function Client() {
  const { data, status } = useSession();
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-bold">Client</h2>
      <p>{JSON.stringify(data?.user)}</p>
      <p>{JSON.stringify(status)}</p>
    </div>
  );
}
