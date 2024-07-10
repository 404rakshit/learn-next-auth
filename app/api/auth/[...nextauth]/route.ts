import NextAuth, { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
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