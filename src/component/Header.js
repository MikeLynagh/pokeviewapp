import React, { useState } from "react"
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";
const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
        <AppBar sx={{ backgroundColor: "red"}} position='sticky'>
            <Toolbar>
                <Typography>
                    Pokedex
                </Typography>
                <Tabs 
                    sx={{ ml: "auto" }}
                    textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/search" label="Search" />
                    <Tab LinkComponent={NavLink} to="/books" label="Books" />
                    <Tab LinkComponent={NavLink} to="/about" label="About us" />

                </Tabs>
            </Toolbar>

           
        </AppBar>
    </div>
    )
    

}

export default Header