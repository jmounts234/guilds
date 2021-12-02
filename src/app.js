var express = require("express");
var logger_morgan = require("morgan");
var apiRouter = require("./routes/api_router");
var viewRouter = require("./routes/view_router");

var app = express();

app.use(logger_morgan("short"));

app.set("view engine", "ejs"); //set view engine to ejs
app.set("views", "views"); //set views directory

app.use("/api", apiRouter);
app.use("/view", viewRouter);

app.listen(3000, function () {
	console.log("Application started and Listening on port 3000");
});
