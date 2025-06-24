const express = require('express');
const router = require('./route.js');

const app = express();


app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});


app.use('/user', router);


app.post("/users", express.json(), (req, res) => {
  const  { name, email } = req.body;
  res.json({
    message: `User ${name} with email ${email} created successfully!`
  })
})


app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
