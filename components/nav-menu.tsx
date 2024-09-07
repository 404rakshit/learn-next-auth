'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

function AuthButton() {
    const { data: session, status } = useSession()
    const pathName = usePathname()

    const nav = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "Client",
            path: "/client"
        }
    ]

    return (
        <div className="flex flex-col items-center gap-2">
            <section className="flex items-center justify-between w-full">
                {status == "authenticated" ? <div className="flex items-center gap-3">
                    <Image className="rounded-full" src={session.user?.image ?? ""} alt="user profile" loader={() => session.user?.image ?? ""} height={40} width={40} />
                    <span className="capitalize text-lg">{session.user?.name}</span>
                </div> : <span className="capitalize text-lg">Not Signed In</span>}

                <nav className="flex gap-5">
                    {nav.map(({ path, title }, i) => (<Link key={i} href={path} className={`${path == pathName ? "text-white" : "text-white/50"}`}>{title}</Link>))}
                </nav>

                {status == "authenticated" ? <button className="rounded-md border border-zinc-800 px-3 py-2 hover:bg-zinc-800/30 transition-all duration-200" onClick={() => signOut()}>Sign Out</button> : <button className="rounded-md border border-zinc-800 px-3 py-2 hover:bg-zinc-800/30 transition-all duration-200" onClick={() => signIn()}>Sign In</button>}
            </section>
        </div>
    )
}

export default function NavMenu() {
    return <AuthButton />
}
