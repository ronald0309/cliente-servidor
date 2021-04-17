'use strict';

const webSocketServer = require('ws').Server;
const wss = new webSocketServer({ port: 8081 });


wss.on('connection', (ws: any) => {

  ws.send('Hello Client');

  ws.on('message', (message: any) => {
    console.log(`[Client]: ${message}`);
  });

  ws.on('end', () => {
    console.log('Connection ended...');
  }); 

}); 
