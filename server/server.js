const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true}
);


app.use(express.json());

