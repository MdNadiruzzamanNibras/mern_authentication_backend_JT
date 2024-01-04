const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
         type: 'string',
         required: true
    },
    
    email:{
        type: 'string',
        required: true,
        unique: true,
    },
    password:{
        type: 'string',
        required: true,
       
    },
    phone:{
        type: Number,
        required: true,
    },
    
    gender:{
        type: 'string',
        required: true,
       
    },
    jobPortal:{
        type: 'string',
        required: true,
       
    },
    city :{
        type: 'string',
        required: true,
       
    },
    
    state:{
        type: 'string',
        required: true,
    },
   
   
})

const user = new mongoose.model("user",userSchema);
module.exports = user;
