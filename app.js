const express = require("express");
const connectToMongo = require('./db');
const multer = require("multer");
const PORT = process.env.PORT || 5000;
const app = express();

connectToMongo();
///////userroutes/////
const signUp = require("./routes/userRoute")
const signIn= require("./routes/userRoute")
const studentroute=require("./routes/StudentRoute")

const cors= require('cors');

app.use(cors())
app.use(express.json());

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '--' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.status(200).json("File has been uploaded");
// });




////////user////
app.use("/api", signUp)////////http://localhost:5000/api/signUp
app.use("/api", signIn)////////http://localhost:5000/api/signIn
app.use('/api/student',studentroute)////////http://localhost:5000/api/student


/////////database connection


app.listen(PORT,()=>{
    console.log("Server is running at port "+PORT)
})