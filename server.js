const WebSocket = require('ws');

const server = new WebSocket.Server({port: 3000});  //сервер, его адрес будет ws://localhost:3000

server.on('connection', ws => {   //при перезагрузке страницы, при подключении клиента к серверу
  ws.on('message', message => {   //получаемое сервером сообщение от клиента
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) { //если у клиента подключен сокет
        client.send(message)  //пошлем клиенту сообщение
      }
    })
  })
  //server.clients- массив всех подключенных серверу клиентов


  // ws.send(console.log('hellow!'))     //срабатывает.
  ws.send('Добро пожаловать!')
}); //событие. срабатывает при подключению к серверу, ws шлет сообщение






