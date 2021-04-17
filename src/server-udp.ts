import udp from 'dgram';
 
const server = udp.createSocket('udp4');
const serverIp='localhost';
const serverPort=2222;
server.on('message',function(msg: string | any[],info: { address: any; port: any; }){
  console.log('Data received from client : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
 
    server.send(msg,info.port,serverIp,function(error: any){
        if(error){
            server.close();
        }else{
            console.log('Data sent !!!');
        }

    });

});
 
server.on('listening',function(){
  const address = server.address();
  const port = address.port;
  const family = address.family;
  const ipaddr = address.address;
  console.log('Server is listening at port :' + port);
  console.log('Server ip :' + ipaddr);
  console.log('Server is IP4/IP6 :' + family);
});
  
server.on('error',function(error: string){
    console.log('Error: ' + error);
    server.close();
  });
 
server.on('close',function(){
  console.log('Socket is closed !');
});

server.bind(serverPort);
 
