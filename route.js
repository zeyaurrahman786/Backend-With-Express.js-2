const express = require('express');

const router = express.Router();

const { userLogin, userSignup } = require('./controller.js');




router.get("/login", userLogin);

router.get("/signup", userSignup);



module.exports = router;