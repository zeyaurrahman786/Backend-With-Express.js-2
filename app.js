const express = require('express');
// const router = require('./route.js');
const app = express();


app.use(express.json());



// Handling a GET Request
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});


// app.use('/user', router);



// Handling a POST Request
app.post("/users", (req, res) => {
  const  { name, email } = req.body;
  res.json({
    message: `User ${name} with email ${email} created successfully!`
  })
})



// Handling a PUT Request
app.put("/users/:id", (req,res) => {
  const userId = req.params.id;
  const {name, email} = req.body;
  res.json({
    message: `User with ID ${userId} updated to ${name}, ${email} successfully!`,
  });
});




// Handling a DELETE Request
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `User with ID ${userId} deleted successfully!`
  });
});


app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
