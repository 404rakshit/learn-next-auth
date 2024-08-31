import { auth } from "@/auth"

export const dynamic = "force-static";

export default async function ProtectedRoute() {

    const session = await auth()

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Middleware</h2>
            <span>{JSON.stringify(session?.user)}</span>
            <p>This is a middleware route</p>
        </div>
    )
}