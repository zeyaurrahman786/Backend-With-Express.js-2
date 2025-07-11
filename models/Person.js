const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: String, 
    email: String,
    password: String,
    gender: String,
    education: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

module.exports = { Person };