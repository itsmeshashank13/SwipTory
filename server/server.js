const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./config/db");


app.use(express.json());

dotenv.config({path: "./config/config.env"});

dbConnection();

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`)
});
