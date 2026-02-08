const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const User_form = require('../models/user')

router.post('/',async(req,res)=>{
    console.log(req.body)
    try{
        let {fullname,email,phone,gender,dob,address,country,password}  = req.body;
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt)

        let data = new User_form({fullname,email,phone,gender,dob,address,country,password});
        await data.save();
        res.status(201).json({message:"User registered succesfully"})
    }catch(error){
        console.err(error)
        res.status(500).json({message:"Error saving data",error})
    }
})
module.exports=router;