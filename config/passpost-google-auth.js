const passport=require('passport');
const mongoose=require('mongoose')

const googleStrategy=require('passport-google-oauth').OAuth2Strategy;

const crypto =require('crypto');

const User=require('../models/schema');

passport.use (new googleStrategy ({
    clientID:"937178897578-lefd198qs7nabur58636kip9qh4u8a8g.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:2000/users/auth/google/callback"

},
function (accessToken,refreshToken,profile,done){
    User.findOne({email:profile.emails[0].val}).exec(function(err,user){
        if(err){
            console.log('error in goggle strategy-passport',err);
            return;
        }
        console.log(profile)

        if(User){
            return done(null,user);
        }
        else{
            User.create({
                name:profile.displayName,
                email:profile.emails[0].value,
                passport:crypto.randomBytes(20).toString('hex')

            },function (err,user){
                if(err){
                    console.log('error in goggle strategy-passport',err);
                    return;
                }
                return done(null,user)
            }
            )
        }
    })
}
));
  module.exports=passport;