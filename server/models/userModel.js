const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password : {
        type: String,
        required: true,
        minlength: 6,
        validate: [
            {
                validator: (password) => {
                    const specialCharacterRegex = /[^a-zA-Z0-9]/g;
                    const specialCharacterCount = password.match(specialCharacterRegex)?.length ?? 0;
                    return specialCharacterCount >= 2;
                },
                message: "Password must contain at least two special characters",
            },
        ],
    },
});


module.exports = mongoose.model("User", userSchema)