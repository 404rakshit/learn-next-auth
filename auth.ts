import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/libs/database"
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    callbacks: {
        signIn: async ({ user }) => {
            await prisma.session.deleteMany({
                where: { userId: user.id }
            })
            return true
        },
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
    },
    pages: {
        signOut: "/"
    },
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "database",
        maxAge: 24 * 60 * 60
    },
    ...authConfig
})