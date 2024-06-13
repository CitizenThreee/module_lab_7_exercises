"use client"
import { useRouter } from "next/navigation"


export default function LoginForm() {
    const router = useRouter();

    return (
        <div>
            <label htmlFor="">username: <input type="text" placeholder="username" /></label> <br />
            <label htmlFor="">password: <input type="password" placeholder="username" /></label> <br />
            <button onClick={() => router.push('/')}>Sign In</button>
        </div>
    )
}