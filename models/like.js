const mongoose=require('mongoose');

const LikeSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId
    },

    //this defines the object id of the liked object

    Likeable:{
        type:mongoose.Schema.ObjectId,
        require:true,
        rePath:'onModel'
    },
    //this field is used for defined the type of the liked object since this is a dynamic refrence 
    onModel:{
        type:String,
        required:true,
        enum:['Post','Comment']
    }

},{
    timestamps:true
});

const like=mongoose.model('Like',LikeSchema);

module.exports=Like;