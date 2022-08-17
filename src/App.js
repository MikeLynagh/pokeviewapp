import React, { Component } from "react";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AddBook from "./component/AddBook";
import Books from "./component/Book/Books";
import About from "./component/About";

function App(){
    return(
        <React.Fragment>
            <header>
            <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/add" element={<AddBook />} exact />
                    <Route path="/books" element={<Books />} exact />
                    <Route path="/about" element={<About />} exact />

                </Routes>

            </main>
        </React.Fragment>
    )
}


// class App extends Component {
//     render(){
//         return <div>
//             Time to get these connected 
//             <Header />
//         </div>
//     }
// }

export default App