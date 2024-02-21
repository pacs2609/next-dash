"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";



export const LogInButton = () => {
    return (
        <button onClick={() => signIn()} >
            Login
        </button>

    )
}

export const LogOutButton = () => {
    return (
        <button onClick={() => signOut()} >
            Logout
        </button>
    )
}