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



















// // Connecting to a Database (MongoDB)

// const express = require('express');
// const mongoose = require('mongoose');
// const { Person } = require('./models/Person.js');

// const app = express();

// const MONGODB_URI = "mongodb+srv://zeyaurrahmanfxt:expressjs123@cluster0.0hcpj3g.mongodb.net/expressjs";


// mongoose.connect(MONGODB_URI)
// .then(() => {
//     console.log("Connected to MongoDB successfully!");
// }).catch((err) => {
//     console.error("Failed to connect to MongoDB:", err);
// });


// app.get("/", (req, res) => {
//   res.send("Welcome to the Home Page!");
// });


// // CRUD Operation -> Create, Read, Update, Delete

// // Creating Data to the Database (MongoDB)

// app.post("/person", express.json(), async (req, res) => {
//     const { name, email, password, gender, education, age } = req.body;
//     const newPerson = new Person({
//         name,
//         email,
//         password,
//         gender,
//         education,
//         age
//     })
//     await newPerson.save()
//     console.log(newPerson);
//     res.send("Person data created successfully!");
// })



// // Updating Data in the Database (MongoDB)

// app.put("/person", express.json(), async (req, res) => {
//   const { id } = req.body;
//   const updatedData = await Person.findByIdAndUpdate(id, {age: '18'})
//   console.log(updatedData);
//   res.send("Person data updated successfully!");
// });



// // Deleting Data from the Database (MongoDB)

// app.delete("/person/:id", async (req, res) => {
//   const { id } = req.params;
//   await Person.findByIdAndDelete(id);
//   res.send("Person data deleted successfully!");
// });



// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });




















// Working with Cookies

// const express = require('express');
// const cookie_Parser = require('cookie-parser');

// const app = express();
// app.use(cookie_Parser());


// app.get("/", (req, res) => {
//     res.cookie("name", "express-app", { maxAge: 3600000 });
//     res.send("Welcome to the Home Page!");
// })


// app.get("/fetch", (req, res) => {
//     console.log(req.cookies);
//     res.send("Cookies fetched successfully!");
// });


// app.get("/remove-cookie", (req, res) => {
//     res.clearCookie("name");
//     res.send("Cookie removed successfully!");
// });



// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });



















// Working with Session Management

// const express = require('express');
// const cookie_Parser = require('cookie-parser');
// const session = require('express-session');


// const app = express();
// app.use(cookie_Parser());
// app.use(session({
//     secret: "mySecretKey",
//     resave: false,
//     saveUninitialized: true,
// }));

// app.get("/", (req, res) => {
//     res.send("Welcome to the Home Page!");
// });


// app.get("/visit", (req, res) => {
//     if(req.session.page_views){
//         req.session.page_views++;
//         res.send(`You have visited this page ${req.session.page_views} times`);
//     } else {
//         req.session.page_views = 1;
//         res.send("Welcome to the page for the first time!");
//     }
// });



// app.get("/remove-visit", (req, res) => {
//     req.session.destroy();
//     res.send("Session data cleared successfully!");
// });


// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });




















// Authentication in Express.js

// 1. Session-Based Authentication
// (Uses cookies and sessions)

// const express = require('express');
// const cookie_Parser = require('cookie-parser');
// const session = require('express-session');


// const app = express();

// app.use(express.json());
// app.use(cookie_Parser());

// app.use(session({
//     secret: "mySecretKey",
//     resave: false,
//     saveUninitialized: true,
// }));


// const users = [];


// app.get("/", (req, res) => {
//     res.send("Welcome to the Home Page!");
// });


// app.post("/signup", (req, res) => {
//     const { username, password } = req.body;
//     users.push({
//         username,
//         password
//     });
//     res.send("User signed up successfully!");
// });




// app.post("/login", (req, res) => {
//     const { username, password } = req.body;
//     const user = users.find(u => u.username === username);
//     if(!user || password !== user.password) {
//         return res.send("Invalid username or password");
//     }
//     req.session.user = user;
//     res.send("User logged in successfully!");
// });



// app.get("/profile", (req, res) => {
//     if(!req.session.user){
//         return res.send("You are unauthorized person");
//     }
//     res.send(`Welcome to your profile, ${req.session.user.username}!`);
// })




// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });








// 2. Token-Based Authentication
// (Uses JWT or OAuth tokens)

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const app = express();
app.use(express.json());

const users = [];

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});


app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
        username,
        password: hashedPassword
    });
    res.send("User signed up successfully!");
});




app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.send("Invalid username or password");
    }
    const token = jwt.sign({username}, "test#secret");
    res.json({token});
});



app.get("/profile", (req, res) => {
    try {
        const token = req.header("authorization");
    const decodedToken = jwt.verify(token, "test#secret");
    if(!decodedToken.username) {
        res.send(`Welcome, ${decodedToken.username}!`);
    } else {
        res.send("Welcome to your profile");
    } 
    } catch (error) {
        res.send("Unauthorized access");
    }
})




app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});