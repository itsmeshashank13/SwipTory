const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password : {
        type: String,
        required: true,
        minlength: 6
    }
});


module.exports = mongoose.model("User", userSchema)