import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getToken } from "next-auth/jwt";


export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const res = await fetch("http://localhost:3000/api/auth", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const response = await res.json();
                if (response.status == 200) {

                    return response.api
                } else {

                    return null

                }
            }
        })
    ],
    pages: {
        signOut: '/',
      },
    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "#0345fc", // Hex color code
        logo: process.env.LOGO_URL, // Absolute URL to image
        buttonText: "" // Hex color code
    }
}