const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;


//require Schema
const User=require('../models/schema');

//authentication using password

passport.use(new LocalStrategy({
    usernameField:'email'
},
function (email,password,done){
    //find  a user Establish  the identity
    User.findOne({email:email},function (err,user){
        if(err){
            console.log('Error in finding user--> passport');
            return done(err);
        }
        if(!user || user.password!=password){
            console.log('Invalid Username/password');
            return done(null,false);
        }
        return done (null,user);
    })

}

));

//serliatizing the user to decide which key is to be kept in the cokkies

passport.serializeUser(function(user,done){
    done(null,user.id)
})



//deserliatizing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user--> passport');
            return done(err);
        }
        return done(null,user);
    })
});


//check if the user is aithenticated 

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();

    }
    //if the user is not aigned in
    return res.redirect('./sign-in');
}

passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}











module.exports=passport;
