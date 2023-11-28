const mongoose = require("mongoose");

const dbConnection = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to database successfully: ${mongoose.connection.host}`);
    } catch {

    }
};

module.exports = dbConnection;