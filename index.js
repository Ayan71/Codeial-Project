const express=require('express');

//require cookies
const cookieParser=require('cookie-parser')
const app=express();
const path=require('path');

const port=2000;
const expressLayouts=require('express-ejs-layouts')
//require mongoose//require mongoose
const db=require('./config/mongoose')
// use for seesion cookies 
const session=require('express-session');

const passport=require('passport');
const passportLocal=require('./config/passport-local');
// const  MongoStore = require('connect-mongo')(session);

//google autgentication 
const passportGoogle=require('./config/passpost-google-auth')




//post use
app.use(express.urlencoded());

//use cookies
app.use(cookieParser());




// app.use('/', require('./routes/index'));
// app.use('/', require('./routes'))










//middle ware
app.use(express.static('assert'));

//extract style ans script from the sub into the layout


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//app.use(expressLayouts);
// app.set ('layout extractStyles',true);
// app.set ('layout extractScripts',true);


  ///setup the chat server to be used with socket.io
const chatServer=require('http').Server(app);
const chatSockets=require('./config/chat_socket').chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat server is running on port 5000')

//mongo use to store the sesion cookies in the db
app.use(session({
    name:'Node',
    secret:'dosomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(100*60*100)
    },
    // store:new MongoStore({
    //     mongooseConnection: db,
    //     autoRemove: 'disable'
    // }), // <-- added closing parenthesis
    function (err) {
        console.log(err || 'connect-mongodb setup ok');
    }
}));
app.use(passport.initialize());
app.use(passport.session());

//use express router
app.use('/',require('./routes'))


app.get('/',(req,res)=>{
  return res.render('home',{title:"Hello world!"})
})

app.get('/logout', async function(req,res){

    
   await req.logout( function(err) {
        if (err) { return next(err); }
        res.redirect('users/sign-in');
      });
    //   req.session=null
      res.status(200).clearCookie('connect.sid', {
    path: '/'
  });
//    req.session.destroy(function (err) {
//        res.redirect('/'); //Inside a callback… bulletproof!
//        });
   });
 





app.listen(port,(err)=>{
    if(err){
        console.log("err msg");
    }
    else{
        console.log("This Server is Running in Port",port);
    }
})
