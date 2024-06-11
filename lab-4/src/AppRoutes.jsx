import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BitcoinRates from "./pages/BitcoinRates";
import Login from "./pages/Login";

export default function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<Home {...props}></Home>} />
            <Route path='login' element={<Login {...props}></Login>} />
            <Route path='bitcoin-rates' element={<BitcoinRates {...props}></BitcoinRates>} />
        </Routes>
    )
}