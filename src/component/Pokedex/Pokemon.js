import React from "react";
import "./styledPokemon.css"


const Pokemon = (props) => {
    const {_id, num, name, img, type, height, weight} = props.book
    return <div className="poke-card">
        <h1>{name}</h1>
        <h2>{_id}</h2>
        <img src={img}></img>
        </div>
}

export default Pokemon