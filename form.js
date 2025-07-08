const express = require("express");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname+'_'+Date.now()+file.originalname);
    }
});


const app = express();
// const upload = multer();
const upload = multer({
    storage,
    limits: { fileSize: 1000000 }, // Limit file size to 1MB
});


app.use(express.urlencoded({ extended: true }));
// app.use(upload.array());
app.use(upload.single('image'));


app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});


app.post("/form", (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("Form data received successfully!");
})


app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
