
const express  = require('express')
const mongoose = require('mongoose')
const router = require("./routes/book-routes")
const cors = require('cors')
const { default: axios } = require('axios')
const app = express()


//middlewares
app.use(express.json())
app.use(cors())
app.use("/books", router) //localhost:5000/books




mongoose.connect("mongodb+srv://admin:vh1QtdnKqxIFni8U@cluster0.opxbapd.mongodb.net/pokedex?retryWrites=true&w=majority")
.then(() => console.log("Connected to database"))
    .then(() =>{
        app.listen(5000)
    } )
    .catch((err) => console.log(err))


   

//mongodb password
//vh1QtdnKqxIFni8U