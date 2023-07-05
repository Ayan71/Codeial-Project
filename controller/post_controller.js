const Post=require('../models/post')
const postMailer=require('../mailer/comment-mailer')


module.exports.create=function (req,res){
    Post.create({
    
        content:req.body.content
      
        // user:req.user._id
    },function (err,post){
        if(err){
            console.log("error in creating a post ");return 
        }
        postMailer.newComment
        return res.render('header',{content:post});
        

    } );
}
