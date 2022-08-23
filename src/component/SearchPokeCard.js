import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard({ PokeCard }) {
    const [pokemon, setPokemon] = useState()

const URL = "http://localhost:5000/books";

// const fetchHandler = async () => {
//     return await axios.get(URL).then((res) => res.data)
// }

useEffect(() => {
    axios.get(URL).then((res) => {
        setPokemon(res.data)
    })
}, [])



  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
}

export default PokeCard;