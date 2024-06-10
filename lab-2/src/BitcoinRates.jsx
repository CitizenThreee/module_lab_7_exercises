import { useEffect, useState } from "react";
import useBitcoinGetter from "./useBitcoinGetter";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
    const [values, setCurrency] = useBitcoinGetter(currencies[0]);

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={values.currency} onChange={e => setCurrency(e)}>
                    {currencies.map(curr => <option value={curr} key={curr}>{curr}</option>)}
                </select>
            </label> <br />

            {values.price}
        </div>
    )
}

export default BitcoinRates;