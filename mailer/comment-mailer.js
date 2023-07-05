const nodeMailer=require('../config/nodemailer')
const Post=require('../controller/post_controller')


// this is another way to exporting a method

exports.newComment=(Post)=>{
    console.log('inside newComment mailer',Post);

    nodeMailer.transpoter.sendMail({
        from:'shaikhjiii333@gmail.com',
        to:comment.user.email,
        subject:"New comment publish!",
        html:'<h1> your comment is publish! </h1>'
    },(err,info)=>{
        if(err){
            console.log('Error in sending mail',err);
            return;
        }
        console.log('Message sent',info);
        return;
    })
}
