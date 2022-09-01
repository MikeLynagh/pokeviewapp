
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./searchbar.css"
import "../styles/pokemon.css"

// URL is the link for the backend database data imported from MongoDB

const URL = "http://localhost:5000/";

// fetchHandler makes a request to  "http://localhost:5000/books" to get data 

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const SearchApp = () => {
    const [books, setBooks] = useState([]);
    const [filteredData, setFilteredData] = useState(books);

    // useEffect fetches data from the URL  "http://localhost:5000/books"

    useEffect(() => {
      fetchHandler().then(data => {
        setBooks(data.books)
        setFilteredData(data.books)
      })

      //validation if no data returned
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
        return item.name.search(value) !== -1;
      })
      setFilteredData(result)

    }

    console.log(filteredData.length)

    return <div class="container">
      <div class="search-box">
        <img class="search-icon" src="https://www.freepnglogos.com/uploads/search-png/search-png-box-image-css-style-maker-design-web-1.png" />
         <input class="search" placeholder="Search by Pokemon name e.g. Charmander, Pikachu" type="text" onChange={(event) =>handleSearch(event)} />
      </div>
      <div>
      <ShowResults filteredData = {filteredData} />
      </div>
    </div>
}

// ShowResults is an arrow function that filters over the data 
// if there are more than one result for the filteredData, 
//ShowResults will display all 150 Pokemon including their number, image link and name.
//If the filteredData equals 1 result, then the data returned for that 
//single result will be number, image, name, height, weight, type 

const ShowResults = ({filteredData}) => {

  if (filteredData.length > 1){
    return (
      <div class="all-pokemon">
      <ul>
      {filteredData.map((item, i) => (
        <div class="each-poke-card">
           <li key={i}>
            <h1> # {item.num}</h1>
             <img src={item.img} />
             <h2>{item.name}</h2>

           </li>
           </div>
        )
           
       )}
        </ul>
        </div>

    )
  } else if (filteredData.length === 0){
    return (
      <div>
        <h2>No Pokemon matches that name </h2>
        <h2>Please try to search a different Pokemon name</h2>
        </div>
    )
  } else 
    return (
      <div class="display-background">
      <ul>
      {filteredData.map((item, i) => (
           <li key={i}>
             <h2>NUMBER: {item.num}</h2>
             <img src={item.img} />
             <h3>NAME: {item.name}</h3>
             <h3>HEIGHT: {item.height}</h3>
             <h3>WEIGHT: {item.weight}</h3>
             <h3>TYPE: {item.type}</h3>

           </li>
        )
           
       )}
        </ul>
        </div>
    )
  } 


export default SearchApp
