import NextAuth, { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
    adapter: new PrismaAdapter(prisma),
    providers: [
        Github({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        EmailProvider({
            server:{
                host: 
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
    },
    events: {
        createUser(message) {

        },
    }
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }