import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/nav-menu";
import SessionProvider from "@/utils/sessionProvider";
import { auth } from "@/auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Next Auth",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main className="mx-auto max-w-6xl flex flex-col gap-2 py-5 lg:py-10 px-5">
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
