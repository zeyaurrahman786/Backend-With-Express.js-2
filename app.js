const express = require('express');
const app = express();



// Routing in Express.js

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});




// Dynamic Routing in Express.js

app.get("/user/:username", (req, res) => {
    const username = req.params.username;
    res.send(`Welcome ${username}`);
});




// Query String in Express.js

// localhost:3000/search?query=express

app.get("/search", (req, res) => {
    const product = req.query.product;
    res.send(`You searched for: ${product}`);
})




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});