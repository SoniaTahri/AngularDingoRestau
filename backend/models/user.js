//
//import mongoose 
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    pwd:String,
    phone:String,
    specialite:String,
    experience:String,
    role:String
});

const user = mongoose.model('User',userSchema);

module.exports = user;