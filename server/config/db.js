const mongoose = require("mongoose");

const dbConnection = ()=> {
    mongoose.connect(process.env.MONGODB_URL, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
    })
    .then((data)=> {
        console.log(`Connected to database successfully: ${data.Connection.host}`);
    })
    .catch((err)=> {
        console.error('Failed to connect to the database', err)
    })
};

module.exports = dbConnection;