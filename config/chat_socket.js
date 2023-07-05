module.exports.chatSockets=function(socketServer){
    let  io=require('socket.io')(socketServer);

    io.sockets.on('connection',function(socks){
        console.log('new connection receiev',socket.id);


        socket.on('disconnect',function(){
            console.log('socket disconnect!');
        })

        socket.on('join_room',function (data){
            console.log('joining request rec.',data);

            socket.join (data.chatroom);

            io.in(data.chatroom).emit('user_joined',data)
        })
    })
    

}