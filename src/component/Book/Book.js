import React from "react";

const Book = (props) => {
    const {id, num, name, img, height, weight} = props.book
    return <div>
        <h1>{id}</h1>
        <h2>{num}</h2>
        <h2>{name}</h2>
        <img src={img}></img>
        <h2>{height}</h2>
        <h2>{weight}</h2>
        </div>
}

// const Book = (props) => {
//     const {_id, name, description, number, image} = props.book
//     return <div>
//         <h1>{number}</h1>
//         <h3>{name}</h3>
//         <img src={image} />

//     </div>
// }

export default Book