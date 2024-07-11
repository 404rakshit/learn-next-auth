import Resend from "next-auth/providers/resend"
import Github from "next-auth/providers/github"

import type { NextAuthConfig } from "next-auth"

export default {
    // debug: true,
    providers: [Github({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }), Resend({
        apiKey: process.env.RESEND_API_KEY,
        from: "no-reply@mail.thequotesgram.com"
    })]
} as NextAuthConfig;
