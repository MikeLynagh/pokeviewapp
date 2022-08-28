
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./searchbar.css"

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const SearchApp = () => {
    const [books, setBooks] = useState([]);
    const [filteredData, setFilteredData] = useState(books);

    useEffect(() => {
      fetchHandler().then(data => {
        setBooks(data.books)
        setFilteredData(data.books)
      })
      .catch(error => {
        console.log("error getting data: " + error)
      })
    }, []);

    console.log(filteredData)

    const handleSearch = (event) => {
      let value = event.target.value
      let result = []
      console.log(value)
      result = books.filter((item) => {
        return item.name.search(value) != -1;
      })
      setFilteredData(result)

    }

    console.log(filteredData.length)

    return <div class="container">
      <div class="search-box">
        <img class="search-icon" src="https://www.freepnglogos.com/uploads/search-png/search-png-box-image-css-style-maker-design-web-1.png" />
         <input class="search" placeholder="Search by Pokemon name e.g. Charmander, Pikachu" type="text" onChange={(event) =>handleSearch(event)} />
      </div>
      <ShowResults filteredData = {filteredData} />
    </div>
}

const ShowResults = ({filteredData}) => {
  if (filteredData.length > 1){
    return (
      <div className="display-background">
      <ul>
      {filteredData.map((item, i) => (
           <li key={i}>
            <h1> # {item.num}</h1>
             <img src={item.img} />
             <h2>{item.name}</h2>

           </li>
        )
           
       )}
        </ul>
        </div>

    )
  } else 
    return (
      <ul>
      {filteredData.map((item, i) => (
           <li key={i}>
             <h2>NAME: {item.name}</h2>
             <img src={item.img} />
             <h3>POKEMON NUMBER: {item.num}</h3>
             <h3>HEIGHT: {item.height}</h3>
             <h3>WEIGHT: {item.weight}</h3>
             <h3>TYPE: {item.type}</h3>

           </li>
        )
           
       )}
        </ul>
    )
  } 


export default SearchApp
