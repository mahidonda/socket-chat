var express= require('express'),
app=express(),
server=require('http').createServer(app),
io =require('socket.io').listen(server);
var usernames=[];
server.listen(process.env.PORT || 3000);

app.get("/",function(req,res){
	res.send('Hello Sagar...!');
});

io.sockets.on('connection',function(socket){
	
	
	socket.on('newUser',function(data){
		io.sockets.emit('joinUser',data+ " Is Join Chat..!");
	});


	//disconnect user
	socket.on('disconnect',function(data){
		
	});
});