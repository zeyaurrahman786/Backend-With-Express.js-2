const express = require('express');
const router = require('./route.js');

const app = express();


app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});


app.use('/user', router);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
