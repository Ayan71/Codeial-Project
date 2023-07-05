const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    password:{
        type:String,
        require:true,
        
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    name:{
        type:String,
        require:true,
    }

});

const User=mongoose.model('User',userSchema);

module.exports=User;