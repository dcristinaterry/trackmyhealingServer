require('dotenv').config()
const express =require('express')
const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



// configs
require('./config/middleware.config')(app);
require('./config/session.config')(app);

//Base URLS
const routes = require("./routes/index.routes");
app.use(routes);

//Connection to Database and Initializing server 
require('./config/sequelize.config')(app)



module.exports=app;