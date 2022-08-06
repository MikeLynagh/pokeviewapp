import React, { Component } from "react";


import PokemonCards from "./PokemonCards";

//import axios for connecting to backend
import axios from 'axios';

export default class PokemonList extends Component {
    // import the pokemon api to state 
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        pokemon: null
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results']});

    }

    render(){
        return (
                <React.Fragment>
                    {this.state.pokemon ? (
                            <div className = "row">
                                {this.state.pokemon.map(pokemon => (
                                    <PokemonCards 
                                    key = {pokemon.name}
                                    name = {pokemon.name}
                                    />
                                ))}
                            </div>
                        ) : (
                            <h1>Loading Pokemon</h1>
                        )
                    }

                </React.Fragment>

        )
    }
}