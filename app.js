const express =require('express')
const app = express();

//Base URLS
const routes = require("./routes/index.routes");
app.use(routes);

// configs
require('./config/middleware.config')(app);
require('./config/session.config')(app);

//Connection to Database and Initializing server 
require('./config/sequelize.config')(app)

module.exports=app;