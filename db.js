const mongoose = require('mongoose')

require('dotenv').config();
// const mongoUrl = 'mongodb://localhost:27017/newhotel';

const mongoUrl = process.env.mongoDB_URL;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const db = mongoose.connection  ;

db.on('connected', ()=>{
    console.log("connected to mongodb server")
})

db.on('error', (err)=>{
    console.log("error while connecting", err)
})