const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// var cors = require("cors");

var app = express();
const port = process.env.PORT || 5000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//DB configuration
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Mongoose connected"))
  .catch((err) => console.log(err));

var indexRouter = require("./routes/index");
var itemRouter = require("./routes/api/items");

app.use(logger("dev"));
app.use(bodyParser.json());
// app.use(cors());
app.use("/", indexRouter);
app.use("/api/items", itemRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static('../frontend/build'));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + '../frontend/build/index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
