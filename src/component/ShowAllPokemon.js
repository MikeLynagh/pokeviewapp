import React from "react";

function ShowAllPokemon({ pokemon, showInfo }) {
  return (
    <div >
             <ul>
                 {pokemon.map((poke,i) => (
                    <div>
                        {poke.name}
                    </div>
                  )
                    
                 )}
             </ul>
     </div>
  )
}

export default ShowAllPokemon;