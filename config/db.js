const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const connect = mongoose.connect(process.env.MONGO_URL)
        console.log('db connected');


    } catch (error) {
        console.log(error);

    }
}
module.exports = connectDB;