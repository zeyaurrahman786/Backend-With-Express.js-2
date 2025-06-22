const express = require('express');
const { userController, searchController } = require('./controller');
const app = express();



// Routing in Express.js

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});




// Dynamic Routing in Express.js

app.get("/user/:username", userController);




// Query String in Express.js

// localhost:3000/search?query=express

app.get("/search", searchController)




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});