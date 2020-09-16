// const express = require("express");
// const session = require("express-session")

// const routes = require("./routes");
// const cookieSession = require("cookie-session")

// const MySQLStore = require("express-mysql-session")(session);

// const app = express();
// const PORT = process.env.PORT || 3001;
// const db = require("./models")

// const keys = require("./config/keys")
// const passport = require("./config/passport");

// var options = {
//   host: process.env.DB_HOST,

// }

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "development") {
//   app.use(express.static("sb-client/public"));
// }
// // Add routes, both API and view
// // app.use(express.static('sb-client/public'));
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static('sb-client/build'))
// }

// // setting up cookies
// app.use(cookieSession({
//   maxAge: 24 * 6060 * 60 * 1000,
//   keys: [keys.session.cookieKey]
// }))

// let sessionStore = new MySQLStore(db);
// initializing passport
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(session({
//   secret: [keys.session.cookieKey], resave: true, saveUninitialized: true,
//   // // , store:sessionStore ,
//   // cookie: { maxAge: 24 * 6060 * 60 * 1000 }
// }));

// app.use(routes);

// db.sequelize.sync().then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   })
// });