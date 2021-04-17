'use strict';

const webSocketServer = require('ws').Server;
const wss = new webSocketServer({ port: 8081 });

const respondToClient = () => {
    const commonAnswers = [
      'My name is Serverio.',
      'I’m from the cloud  ',
      'is 172.0.0.1',
      'I live in the Cloud.',
      '506-5555-5555',
      'Twenty-five. I’m twenty-five years old.',
      'I was born in after COVID',
      'I’m single.',
      'I’m a Server.',
      'I went to a friend’s house.',
      'We played video games.',
      'I was in New York for the weekend.',
      'Yes, I’ve got a good job.',
      'Yes, I’ve got three Bits – two boys and a girl.',
      'Yes, I can play Fornite.',
      'No, I can’t speak Japanese. ',
      'Yes, I could speak English when I was five years old.',
      'How do you do. Pleased to meet you.',
      'Fine, thanks. And you? ',
      'Yes. I’m looking for a sweater.',
      'Sure, the changing rooms are over there.',
      'It’s $45.',
      'By credit card.',
      'Certainly. We accept all major cards.',
      'Certainly, we’ve got smaller sizes as well. ',
      'It’s a cat!',
      'It’s three o’clock.',
      'Certainly. It’s hot in here!',
      'Yes. There is a bank on the next corner next to the post office.',
      'The nearest pharmacy is on 15th street.',
      'Hemingway wrote “The Sun Also Rises”.',
      'Yes, there’s a lot of sugar left.',
      'No, there aren’t any apples left.',
      'No, I think it’s his ball.',
      'It’s Jack’s. ',
      'I like playing tennis, reading and listening to music.',
      'He’s tall and slim.',
      'I’d like to eat a steak and chips.',
      'It’s an interesting country.',
      'It’s raining at the moment.',
      'Yes, thank you. I’d like some coffee. ',
      'It’s about a young boy who encounters adventures.',
      'I thought the book was very interesting.',
      'The test was very difficult!',
      'The questions were very easy.',
      'It was very interesting.',
      'I’m going to visit some friends next weekend.',
      'Let’s go see a film.',
      'Yes, that sounds like a good idea.',
    ];
  
    //TODO: Completar esta función para que devuelva un string aleatorio del arreglo anterior
    return commonAnswers[5];
  
  };
  
wss.on('connection', (ws: any) => {
    console.log(ws._socket.remoteAddress); 
    console.log(ws._socket.remotePort); 
  
  ws.send('Hello Client');

  ws.on('message', (message: any) => {
    console.log(`[Client]: ${message}`);
  });

  ws.on('end', () => {
    console.log('Connection ended...');
  }); 

}); 
