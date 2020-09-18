const express =require('express')
const app = express();


// configs
require('./config/middleware.config')(app);
require('./config/session.config')(app);

//Base URLS
const routes = require("./routes/index.routes");
app.use(routes);

//Connection to Database and Initializing server 
require('./config/sequelize.config')(app)

module.exports=app;