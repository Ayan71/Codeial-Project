class ChatEngine{
    constructor(chatBoxId,userEmail){
        this.chatBox=$(`#${this.chatBox}`);
        this.userEmail=userEmail;

        this.socket=io.connect('http://localhost:5000')

        if(this.userEmail){
            this.connectionHandler();
        }
    }
    connectionHandler(){
        this.socket.on('connect',function(){
            console.log('connection establish using sockets...!');
        });

        self.scoket.emit('join room',{
            user_email:self.userEmail,
            chatroom:'codeial'

        });

        self.socket.on('user_joined',function (data){
            console.log('a user joined !',data);
        })
    }
}