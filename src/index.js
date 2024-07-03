const express = require("express");

const app = express();

app.set("view engine", "ejs");

// middleware
// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// });

// static routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

// dynamic routes
// app.get("/about/:name", (req, res) => {
//   res.send(req.params.name + ": he is very good person");
// });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
