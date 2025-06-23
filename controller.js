const userLogin = (req, res) => {
    res.send("User Login Page");
}


const userSignup = (req, res) => {
    res.send("User Signup Page");
}


module.exports = { userLogin, userSignup };