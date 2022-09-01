
const express  = require('express')
const mongoose = require('mongoose')
const router = require("./routes/book-routes")
const cors = require('cors')
const { default: axios } = require('axios')
const app = express()

// code taken from https://www.youtube.com/watch?v=5Y5QKfxTErU
// I modelled this code from the above youtub tutorial


//middlewares
app.use(express.json())
app.use(cors())
app.use("/", router) //localhost:5000/


// mongoose.connect will connect to the mongoDB Atlas database for this project. 
// On successful connection, "Connected to database" will display in the terminal 

mongoose.connect("mongodb+srv://admin:vh1QtdnKqxIFni8U@cluster0.opxbapd.mongodb.net/pokedex?retryWrites=true&w=majority")
.then(() => console.log("Connected to database"))
    .then(() =>{
        app.listen(5000)
    } )
    .catch((err) => console.log(err))


   

//mongodb password
//vh1QtdnKqxIFni8U