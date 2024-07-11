import { auth } from "@/auth"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const session = await auth()
        if (!session || !session.user) throw { status: 403, message: "Not Logged In" }
        return NextResponse.json({ ...session?.user, message: "Logged In" }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 200 })
    }
} 