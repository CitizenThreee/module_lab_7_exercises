import { useState, useEffect, useReducer } from "react";

export default function useBitcoinGetter(initCurrency) {
    const [currency, setCurrency] = useState(initCurrency);
    const [price, setPrice] = useState(0);

    function handleChange(e){
        setCurrency(e.target.value);
    }

    const values = {price: price, currency: currency};

    useEffect(() => {
        let ignore = false;
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`).then(response => response.json()).then(data => setPrice(data.bitcoin[`${currency.toLowerCase()}`]))

        return() => {
            ignore = true;
        }
    }, [currency]);

    return [values, handleChange];
}