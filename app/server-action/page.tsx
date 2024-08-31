import React from "react";
import User from "./user";
import { auth } from "@/auth";

export const dynamic = "force-static";

export default function ServerActionPage() {
  const getUser = async () => {
    "use server";
    const session = await auth();
    return session?.user?.email ?? "Not Logged In";
  };
  return <User serverFucn={getUser} />;
}
