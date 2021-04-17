'use strict';

import WebSocket from 'ws';

var ws = new WebSocket('ws://127.0.0.1:8081');

ws.onopen = function () {
  console.log('Connection is open ...');
  ws.send('Hello Server!');
};
ws.onerror = function (err: any) {
  console.log('err: ', err);
};
ws.onclose = function () {
  console.log('Connection is closed...');
  process.exit(1);
};

ws.onmessage = function (event: any) {
  console.log(`[Server]: ${event.data}`);
};

  function main() {
  var stdin = process.openStdin();

  stdin.addListener('data', function (d) {
    const message = d.toString().trim();
        if(message=='#salir'){
            ws.send('Adios servidor!');
            ws.close();}
        else{
            ws.send(message);
        }
   
  });
}
main();
