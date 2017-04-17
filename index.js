var express= require('express'),
app=express(),
server=require('http').createServer(app),
io =require('socket.io').listen(server);
server.listen(process.env.PORT || 3000);

app.get("/",function(req,res){
	res.send('Hello TechHive...!');
});

io.configure(function () { 
  io.set("transports", a["xhr-polling"]); 
  io.set("polling duration", 10); 
});

io.sockets.on('connection',function(socket){

		socket.on('test',function(data){
			io.sockets.emmit('reciveTest',data+" from server..");
		});
	
	
	
});