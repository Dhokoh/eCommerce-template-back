require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connected');
    } catch (e) {
        console.log('Connection failure');
    }
}

module.exports = { dbConnection };