const express = require("express");
const cors = require('cors');
require('dotenv').config()

module.exports = app => {

  app.use(express.urlencoded({
    extended: false
  }));
  app.use(express.json());


  const whitelist = process.env.WHITELIST;

  // var corsOptions = {
  //   origin: function (origin, callback) {
  //     console.log(whitelist);
  //     console.log(origin)
      
  //     if (whitelist.indexOf(origin) !== -1) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error('Not allowed by CORS'))
  //     }
  //   }
  // }
  

  // const corsOptions = {
  //     origin: (origin, cb) => {
  //         const originWhitelisted = whitelist.includes(origin)
  //         cb(null, originWhitelisted)
  //     },
  //     credentials: true // RUTAS PERSISTENTES
  // }
  app.use(cors())


}

