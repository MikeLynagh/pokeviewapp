const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors())


// app.use is used to connect to http://localhost:8080/login
// "/login" is the route for which the middleware function applies 
// req and res are the request and response middlewar functions app. 
// the token "test123 " will be returned as a response to show that this middleware is working. 


app.use("/login", (req, res) => {
    res.send({
        token: "test123"
    })
})

app.listen(8080, () => console.log("API is running on http://localhost:8080/login"))