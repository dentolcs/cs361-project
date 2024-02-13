const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.post("/budget", (req, res) => {

  const userBudget = req.body.budget
  // store budget
  res.redirect("/enterMovies.html");
})

app.post("/movies", (req, res) => {

  const userBudget = req.body.userMovies
  // Show movies entered and reload page until Done
  res.redirect("/enterMovies.html");
})



app.listen(port, () => {console.log(`Server listening on ${port}...`)});