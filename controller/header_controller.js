//display post related user

const Post=require('../models/post')

module.exports.header=function(req,res){
   // console.log(req.cookies);

//    Post.find({},function (err,posts){
//     return res.render('header')
//      ,{ posts:posts}
//    })
    return res.render('header');
}

// module.exports.home=function(req,res){
//     return res.render('home');
// }