import React, { Component, useState } from "react";
import Header from "./component/Header";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import SearchApp from "./component/SearchApp";
import Books from "./component/Pokedex/PokemonList";
import About from "./component/About";
import Login from "./component/Login/Login";
import useToken from "./component/Login/useToken";


function App(){
    const { token, setToken } = useToken()

    // a token must be return otherwise, the web application will display the login page. 



    if(!token){
        return <Login setToken={setToken} />
    }
    return(
        <React.Fragment>
            <header>
            <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<SearchApp />} exact />
                    <Route path="/about" element={<About />} exact />

                </Routes>

            </main>
        </React.Fragment>
    )
}



export default App