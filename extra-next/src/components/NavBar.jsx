"use client"
import { usePathname } from "next/navigation"
import Link from "next/link";
import "../app/page.module.css";

export default function NavBar() {
    const path = usePathname();

    return (
        <nav className="NavBar">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><Link href='/' className={path == '/' ? 'active' : null}>Home</Link></li>
            <li><Link href='/bitcoin-rates' className={path.startsWith('/bitcoin-rates') ? 'active' : null}>Bitcoin Rates</Link></li>
            <li><Link href='/login' className={path.startsWith('/login') ? 'active' : null} >Login</Link></li>
          </ul>
        </nav>
    )
}