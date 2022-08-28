


import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const Search = () => {
    const [searchFilter, setSearchFilter] = useState('')
    const [books, setPokemon] = useState([null]);

    useEffect(() => {
        axios.get(URL).then((res) => {
            setPokemon(res.data)
        })
    }, [])
    console.log(books)

    const result = Array.isArray(books)
    console.log(result)

    const filteredPokemon = books.filter(item => item.name.includes(searchFilter))
    console.log(filteredPokemon)

    useEffect(() => {
        fetchHandler().then((data) => setPokemon(data.books))
    }, []);
    console.log(books)


    // const filteredPokemon = data.filter(pokemon => pokemon.name.includes(searchFilter))

    

    return(
        <div>
            find countries <input value = {searchFilter} onChange={e => setSearchFilter(e.target.value)} /> 
            {/* {books.map(item => <div key={item._id}>{item.name}</div>)} */}
        </div>
    )

    return <div>
            <ul>
                {books && 
                 books.map((book,i) => (
                    <li key={i}>
                        <Pokemon book={book}/>
                    </li>
                 )
                    
                )}
            </ul>
    </div>

}

export default Search 
