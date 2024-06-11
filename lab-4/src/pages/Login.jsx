import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();

    return(
        <>
            <div>
                <label htmlFor="">username: <input type="text" placeholder="username" /></label> <br />
                <label htmlFor="">password: <input type="password" placeholder="username" /></label> <br />
                <button onClick={() => navigate('/')}>Sign In</button>
            </div>
        </>
    )
}