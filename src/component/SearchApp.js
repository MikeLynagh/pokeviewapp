
import React, { useEffect, useState } from "react";
import axios from "axios";

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

    

    return <div className="App">
      <div style={{ margin: '40 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
      </div>


            <ul>
               
                  {filteredData.map((item, i) => (
                    <li key={i}>
                      <h2>{item.name}</h2>
                      <img src={item.img} />
                    </li>
                 )
                    
                )}
            </ul>
    </div>
}

export default SearchApp
