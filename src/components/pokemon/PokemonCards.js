import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'

import styled from 'styled-components';

const PokeImg = styled.img`
width: 5em;
height: 5em;
`;




export default class PokemonCards extends Component {

// create state to pull in data from pokemon api
    state = {
        name: '',
        imageUrl: '',
    }

    // componentDidMount(){
    //     const { name, url } = this.props;
    // }

    componentDidMount(){
        const { name, url } = this.props;

        const imageUrl =   `https://projectpokemon.org/images/normal-sprite/${name}.gif`;
        this.setState({
            name, 
            imageUrl,
        })
    }

    render() {
        

        return(
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h1> {this.state.name}</h1>
                    </div>
                    <PokeImg className="mx-auto mt-2">
                        src = {this.state.imageUrl}
                    </PokeImg>
                </div>
            </div>
        )
    }
}