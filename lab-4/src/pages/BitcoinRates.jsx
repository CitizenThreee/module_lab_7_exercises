import { useEffect, useState } from "react";
import useBitcoinGetter from "../components/useBitcoinGetter";
import { NavLink } from "react-router-dom";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
    const [values, setCurrency] = useBitcoinGetter(currencies[0]);

    return (
        <div className="BitcoinRates componentBox">
            <nav className="NavBar">
                <ul style={{listStyleType: "none", padding: 0}}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/bitcoin-rates'>Bitcoin Rates</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>

            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={values.currency} onChange={setCurrency}>
                    {currencies.map(curr => <option value={curr} key={curr}>{curr}</option>)}
                </select>
            </label> <br />

            {values.price}
        </div>
    )
}

export default BitcoinRates;