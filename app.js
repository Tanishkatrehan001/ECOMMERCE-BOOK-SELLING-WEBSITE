const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)

mongoose
  .connect(
    "mongodb+srv://admin:eovU9Qilmnv0KbhT@cluster0.12xuuvx.mongodb.net/BOOK_STORE?retryWrites=true&w=majority&appName=Cluster0"
).then(()=> console.log("Connected to Database"))
.then(()=>{
    app.listen(5000);
}).catch((err)=> console.log(err));


// eovU9Qilmnv0KbhT