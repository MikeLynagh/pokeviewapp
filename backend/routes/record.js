const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
    
  
    
   module.exports = recordRoutes;