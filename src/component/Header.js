import React, { useState } from "react"
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";
const Header = () => {
    const [value, setValue] = useState();

    // The following code will create the navbar for this application 
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
                        {/* the code below will act as hyperlinks to search and about pages  */}
                        
                    <Tab LinkComponent={NavLink} to="/about" label="About" />

                </Tabs>
            </Toolbar>

           
        </AppBar>
    </div>
    )
    

}

export default Header