console.log("welcome to Magic Notes");
// ENTERNAL PACKAGES
require("dotenv").config({path: "./.env"});
require('express-async-errors');
const express = require("express");
const cors = require("cors");

// ROUTES
const auth = require("./routes/auth");
const notes = require("./routes/notes");
// const admin = require("./routes/admin")


// MIDDLEWARES IMPORTS
const errorHandler = require("./errors/errorHandler")
const fetchUser = require("./middleware/fetchUserDetail");
const notFound = require("./middleware/NotFound")

// DATABASE CONNECTIVITY
const connectDB = require("./db_connect");


const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
const url = "mongodb://127.0.0.1:27017/magicNotes";

// ROUTES
app.use("/api/v1/auth", auth);
app.use("/api/v1/notes",fetchUser, notes);
// app.use("api/v1/admin", admin);



app.use(errorHandler);
app.use(notFound);
app.use(cors());


//  ------------ START THE SERVER ------------------------------
const start = async () => {
  try { 
   await connectDB(url);
    app.listen(port, () => {
      console.log(`Connect To Db + magic notes app listening on port http://localhost:${port}/`);;
      
    });
  } catch (err) {
    console.log(err);
  }
};

start();
