const mongoose = require('mongoose');
require("dotenv").config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("DB Connected");
        });
    } catch (error) {
        console.log(error);
        setTimeout(connectDB, 3000);
    }
}

module.exports = connectDB;