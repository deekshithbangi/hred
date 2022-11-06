const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoDB_URI');

const coonectDB = async() => {
    try {
        await mongoose.connect(db,{
            // useNewUrlParser : true,
            // useUnifiedTopolgy: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        });
        console.log('MongoDB connected successfully');
    }
    catch(err) {
        console.log(err.message);
        process.exit(1);
    }
};
module.exports = coonectDB;