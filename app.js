const express =require('express')
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const db = require("./models")


// configs
require('./config/middleware.config')(app);
require('./config/session.config')(app);

//Base URLS
app.use(routes);
db.sequelize.sync().then(function () {

    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    })
});

module.exports=app;