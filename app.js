// const express = require('express');
// const router = require('./route.js');
// const app = express();


// app.use(express.json());


// Middleware
// app.use((req, res, next) => {
//     console.log("A new request received at " + Date.now());
//     next();
// })


// Handling a GET Request
// app.get("/", (req, res) => {
//     res.send("Welcome to the Home Page!");
// });


// app.use('/user', router);



// Handling a POST Request
// app.post("/users", (req, res) => {
//   const  { name, email } = req.body;
//   res.json({
//     message: `User ${name} with email ${email} created successfully!`
//   })
// })



// // Handling a PUT Request
// app.put("/users/:id", (req,res) => {
//   const userId = req.params.id;
//   const {name, email} = req.body;
//   res.json({
//     message: `User with ID ${userId} updated to ${name}, ${email} successfully!`,
//   });
// });




// Handling a DELETE Request
// app.delete("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.json({
//     message: `User with ID ${userId} deleted successfully!`
//   });
// });





// app.post("/form", (req, res) => {
//   console.log(req.body);
//   res.send("Form data received successfully!");
// })




// app.listen(3000, () => {
//   console.log("Server is running on port http://localhost:3000");
// });



















// Connecting to a Database (MongoDB)


const express = require('express');
const mongoose = require('mongoose');
const { Person } = require('./models/Person.js');

const app = express();

const MONGODB_URI = "mongodb+srv://zeyaurrahmanfxt:expressjs123@cluster0.0hcpj3g.mongodb.net/expressjs";


mongoose.connect(MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB successfully!");
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});


app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});


// CRUD Operation -> Create, Read, Update, Delete

// Creating Data to the Database (MongoDB)

app.post("/person", express.json(), async (req, res) => {
    const { name, email, password, gender, education, age } = req.body;
    const newPerson = new Person({
        name,
        email,
        password,
        gender,
        education,
        age
    })
    await newPerson.save()
    console.log(newPerson);
    res.send("Person data created successfully!");
})



app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
