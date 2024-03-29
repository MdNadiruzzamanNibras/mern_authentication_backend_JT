const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRouter = require("./user/userRouter")
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(userRouter)

let uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uf4d38c.mongodb.net/authentication?retryWrites=true&w=majority`

// connectDB is a function that connect mongodb database
async function connectDB () {
    try{
      await mongoose.connect(uri)
      console.log("connect db");
    }
    catch{
        console.error('Error connecting to MongoDB:', error);
    }
}
connectDB();
// get root path and send a message
// 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})