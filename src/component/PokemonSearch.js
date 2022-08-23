import React from "react";

const PokemonSearch = ({ filter, onFilterChange }) => {
        return (
                <div>
                        Find pokemon{" "}
                        <input value = {filter} onChange={onFilterChange} type="search" />
                        
                </div>
        )
}

export default PokemonSearch