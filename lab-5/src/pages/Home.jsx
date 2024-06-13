import { NavLink } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Typography } from "@mui/material"

export default function Home() {
    return (
        <>
            <NavBar title={'Home'}></NavBar>
            <Typography variant="p" component={'div'} sx={{textAlign: "center", marginTop: '20px'}}>This is the home menu!</Typography>
        </>
    )
}