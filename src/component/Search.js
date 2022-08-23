


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

// const Books = () => {
//     const [books, setBooks] = useState();
//     // set search query to empty string 
//     const [query, setQuery] = useState("")
//     // you can search data by pokemon name only 
//     const [searchParam] = useState(["name"])

//     useEffect(() => {
//         fetchHandler().then((data) => setBooks(data.books))
//     }, []);

//     console.log(books)

//     const search_parameters = ["Name"]


//     function search(books){
//         return books.filter(
//             (item) => 
//             search_parameters.some((parameter) => 
//             item[parameter].toString().toLowerCase().includes(query)
//             )
//         )
//     }


//     return <div>
//         <div className="search-wrapper">
//                         <label htmlFor="search-form">
//                             <input
//                                 type="search"
//                                 name="search-form"
//                                 id="search-form"
//                                 className="search-input"
//                                 placeholder="Enter Pokemon Name"
//                                 onChange={(e) => setQuery(e.target.value)}
//                             />
//                             <span className="sr-only">Show Pokemon by Name</span>
//                         </label>
//                     </div>
//         <ul>
//             {search(books).map((item, i) => (
//                     <li key={i}>
//                         <div>
//                             <h1>{item.name}</h1>
//                             <img src={item.img} alt={item.img} />
//                         </div>
//                     </li>
//                 ))
//             }
//         </ul>

//     </div>

// }

// export default Books