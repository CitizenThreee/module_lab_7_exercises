import { useEffect, useState } from "react";
import useBitcoinGetter from "./useBitcoinGetter";
import { useEmojiContext } from "./emojiProvider";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
    const [values, setCurrency] = useBitcoinGetter(currencies[0]);
    const {emoji, handleSetEmoji} = useEmojiContext();

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>

            <h1>{emoji}</h1>

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