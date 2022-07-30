import React, { Component } from "react";

import PokemonCards from "./PokemonCards";

export default class PokemonList extends Component {
    render(){
        return (
            <div className="row">
                <PokemonCards />
                <PokemonCards />
                <PokemonCards />
                <PokemonCards />
                <PokemonCards />

            </div>
        )
    }
}