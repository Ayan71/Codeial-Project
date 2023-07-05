const express=require('express');

const router=express.Router();
const passport=require('passport');

const userController=require('../controller/users_controller')

router.get('/pro',passport.checkAuthentication,userController.profile)

router.get('/sign-up',userController.signUp);
 router.get('/sign-in',userController.signIn);

 router.post('/create',userController.create);

//  use passport as middle ware to authenticate
 router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
 ),userController.createSession);

//logout users


router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/users/sign-in'}),userController.createSession);




module.exports=router;
