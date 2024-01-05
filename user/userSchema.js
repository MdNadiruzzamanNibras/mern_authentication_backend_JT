const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
         type: 'string',
         
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
       
    },
    
    gender:{
        type: 'string',
        
       
    },
    jobPortal:{
        type: 'string',
      
       
    },
    city :{
        type: 'string',
       
       
    },
    
    state:{
        type: 'string',
       
    },
   
   
})

const user = new mongoose.model("user",userSchema);
module.exports = user;
