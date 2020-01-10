//for  Socket.io
const Server = require('socket.io');

const server = new Server(3000);  //соджали сервер с портом 30000

server.on('connection', socket => {  //обект socket представляет собой соединение с клиентом
  socket.on('chat', messege => {  //названия событий мы здесь можем сами придумывать
    server.emit('chat', messege);  //полученное сообщение передакм всем подключенным клиентам
  });

  socket.emit('ready', 'Hi!') //это сообщение будет отправлено 1 раз при подключении клиента
});



