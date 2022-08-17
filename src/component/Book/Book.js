import React from "react";

const Book = (props) => {
    const {_id, name, description, number, image} = props.book
    return <div>
        <h3>{name}</h3>

    </div>
}

export default Book