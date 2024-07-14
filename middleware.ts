import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {

    const { nextUrl } = req
    const AuthRoute = ["/dashboard", "/middleware"].includes(nextUrl.pathname)
    const isLogged = !!req.auth

    // console.log(req.auth);
    

    if (AuthRoute) {
        if (!isLogged) {
            const newUrl = new URL("/api/auth/signin", req.nextUrl.origin)
            return NextResponse.redirect(newUrl)
        }
    } 
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};