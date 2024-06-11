import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <nav className="NavBar">
                <ul style={{listStyleType: "none", padding: 0}}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/bitcoin-rates'>Bitcoin Rates</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </>
    )
}