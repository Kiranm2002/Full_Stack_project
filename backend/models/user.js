const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    gender:{type:String,required:true},
    dob:{type:Date,required:true},
    address:{type:String,required:true},
    country:{type:String,required:true},
    password:{type:String,required:true}
})

module.exports = mongoose.model('User_form',userSchema)