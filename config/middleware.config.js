const express = require("express");


require('dotenv').config()

module.exports = app =>{


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
// setting up cookies

}