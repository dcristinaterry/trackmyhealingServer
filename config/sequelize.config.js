require('dotenv').config()
const db = require("../models")
const PORT = process.env.PORT || 3001;

module.exports = (app) => {
  db.sequelize.sync().then(function () {

    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    })
  });
}