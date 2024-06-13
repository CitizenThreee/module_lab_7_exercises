"use client"

import useBitcoinGetter from "./useBitcoinGetter";

export default function BitcoinPrice() {
    const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
    const [values, setCurrency] = useBitcoinGetter(currencies[0]);

    return (
        <div className="BitcoinRates componentBox">
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