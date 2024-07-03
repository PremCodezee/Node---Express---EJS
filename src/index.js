const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

// middleware
// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// });
// dynamic routes
// app.get("/about/:name", (req, res) => {
//   res.send(req.params.name + ": he is very good person");
// });

// static routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// error handler
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
