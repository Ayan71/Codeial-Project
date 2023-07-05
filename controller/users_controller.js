//require Schema
const User=require('../models/schema')

module.exports.profile=function(req,res){

    //use condtion like user wnat to use this page first cake it is sign in or not 
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function (err,user){
            if(user){
                return res.render('home')
            }
            return res.redirect('./users/sign-in')
        })
    }else{
        return res.redirect('/users/sign-in');
    }

   
}
// module.exports.profile=function(req,res){
//     return res.render('home');
// }



//render the signUp page
 module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
      return   res.redirect('/pro')
    }
    
    return res.render('signUp');
 }

 //render the signIn page
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/pro')
    }
    return res.render('signIn')

}

//get the sign-up data

module.exports.create=function (req,res){
    //first check password is not equal
    if(req.body.password!=req.body.confirmPassword){
        return  res.redirect('back');
    }
    User.findOne({email:req.body.email},function (err,user){
        if(err){console.log('error in finding in signing up');return}

        if(!user){
            User.create(req.body,function (err,user){
                if(err){console.log('error in cearter user while signing up');return}
                 

                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    })



    

}

//get the sign-in and create a seesion for the user
module.exports.createSession= async function(req,res){

    //step to authentication 
   
    //find the user
    console.log(req,'req');

    try{
    return res.redirect('/');
    }
    catch(err){
        console.log('err',err);
        
    }


}



