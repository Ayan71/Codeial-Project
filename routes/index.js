const  express  = require('express');


const router=express.Router();

const homeController=require('../controller/header_controller')
// router.get('/home',homeController.header);
router.get('/',homeController.header);

//go to the another file users
router.use('/users',require('./users'));
//for any furthher routes acces from here
//router.use('/routername',require('./routerfile'))
router.use('/posts',require('./post'));




module.exports=router;