import udp from 'dgram';

const client = udp.createSocket('udp4');
const serverIp='localhost';
const serverPort=2222;

client.on('message', function (msg, info) {
  console.log('Data received from server : ' + msg.toString());
  console.log(
    'Received %d bytes from %s:%d\n',
    msg.length,
    info.address,
    info.port
  );
});

function sendOneMessage() {
  const data = Buffer.from('Hello Dad!');

  client.send(data, serverPort, serverIp, function (error) {
    if (error) {
      client.close();
    } else {
      console.log('Data sent !!!');
    }
  });
}

function sendMultiplesMessages() {
  const firstData = Buffer.from('hello ');
  const secondData = Buffer.from('Mom');
  client.send([firstData, secondData], serverPort, serverIp, function (error) {
    if (error) {
      client.close();
    } else {
      console.log('Data sent !!!');
    }
  });
}

sendOneMessage();
sendMultiplesMessages();

