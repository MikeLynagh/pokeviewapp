import React, { Component } from "react";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import SearchApp from "./component/SearchApp";
import Books from "./component/Pokedex/PokemonList";
import About from "./component/About";

function App(){
    return(
        <React.Fragment>
            <header>
            <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/search" element={<SearchApp />} exact />
                    <Route path="/books" element={<Books />} exact />
                    <Route path="/about" element={<About />} exact />

                </Routes>

            </main>
        </React.Fragment>
    )
}



export default App