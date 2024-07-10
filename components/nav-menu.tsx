'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

function AuthButton() {
    const { data: session } = useSession()
    const pathName = usePathname()

    const nav = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Protected",
            path: "/protected"
        },
        {
            title: "Server Action",
            path: "/server-action"
        },
        {
            title: "Client API",
            path: "/client-api"
        },
        {
            title: "Server API (RSC)",
            path: "/server-api"
        },
    ]

    if (session) {
        return (
            <div className="flex flex-col gap-2">
                <section className="flex justify-between w-full">
                    <div className="flex items-center gap-3">
                        <Image className="rounded-full" src={session.user?.image ?? ""} alt="user profile" loader={() => session.user?.image ?? ""} height={40} width={40} />
                        <span className="capitalize text-lg">{session.user?.name}</span>
                    </div>

                    <nav className="flex gap-5">
                        {nav.map(({ path, title }, i) => (<Link key={i} href={path} className={`${path == pathName ? "text-white" : "text-white/50"}`}>{title}</Link>))}
                    </nav>

                    <button className="rounded-md border border-zinc-800 px-3 py-2 hover:bg-zinc-800/30 transition-all duration-200" onClick={() => signOut()}>Sign Out</button>
                </section>
                {/* <p>{JSON.stringify(session)}</p> */}
            </div>
        )
    }

    return (
        <div className="flex flex-col mx-auto">
            <p>Not Signed In</p>
            <button className="rounded-md border border-zinc-800 px-3 py-2 hover:bg-zinc-800/30 transition-all duration-200" onClick={() => signIn()}>Sign In</button>
        </div>
    )
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton />
        </div>
    )
}
