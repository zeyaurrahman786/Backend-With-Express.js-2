const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});


// Handling multiple routes parameters

// /users/name/id


app.get("/things/:name/:id", (req, res) => {
    const { name, id } = req.params;
    res.json({
        id,
        name
    })
});



app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
