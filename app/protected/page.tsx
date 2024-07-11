import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function ProtectedRoute() {

    const session = await auth()

    if (!session || !session.user) {
        redirect("/api/auth/signin")
    }

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Welcome, {session.user.name}</h2>
            <span>{JSON.stringify(session.user)}</span>
            <p>This is a protexted route</p>
        </div>
    )
}