const mongoose = require('mongoose');
require('dotenv').config();
//Define the MongoDB connection URL
//const mongoURL = process.env.DB_URL_LOCAL;//Replace ''mydatabase' with your database name 
const mongoURL = process.env.DB_URL;
//setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewURLParser: true,
    useUnifiedTopology: true


})

const db = mongoose.connection;

//Define event listener for database connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.error('MongoDB connection error:',err);
});

db.on('disconnected',()=>{
    console.log(' MongoDB disconnected');
});

//Export the database connection
module.exports =db;





