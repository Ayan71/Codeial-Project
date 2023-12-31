const mongoose=require('mongoose');


const postSchema=new mongoose.Schema({
    content:{
        type:String,
        require:true
        },

        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        //include the array of ids of all comment in this post Schema itself
        comments:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:'comment'
            }
        ]
},{
    timestamps:true

});

const Post=mongoose.model('Post',postSchema);
module.exports=Post;