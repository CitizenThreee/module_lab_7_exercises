import { useEffect, useState } from "react";
import useBitcoinGetter from "../components/useBitcoinGetter";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, FormControl, Typography, InputLabel, Select, MenuItem } from "@mui/material";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
    const [values, setCurrency] = useBitcoinGetter(currencies[0]);

    return (
        <>
            <NavBar></NavBar>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: '50px'}}>
                <Typography>Bitcoin Exchange Rate</Typography>
                <FormControl sx={{margin: '25px'}}>
                    <InputLabel id="currencySelect">Currency</InputLabel>
                    <Select
                        label="Currency"
                        onChange={setCurrency}
                        value={values.currency}
                    >   
                        {currencies.map(curr => <MenuItem value={curr} key={curr}>{curr}</MenuItem>)}
                    </Select>
                </FormControl>

                {values.price}
            </Box>
        </>
        
    )
}

export default BitcoinRates;