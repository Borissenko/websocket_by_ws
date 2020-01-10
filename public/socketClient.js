const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');


const socketClient = io('http://localhost:3000')
//io - будет доступна глобально, поэтому ее не экспортируем ниоткуда
//сначало подключаемся по 'http' (!), библиотека подключить ся по протоколу ws, если он доступен


function setStatus(value) {  //изменяем  строчку "статус" на странице
  status.innerHTML = value;
}

function printMessage(value) {  //выводим сообщение на страницу
  const li = document.createElement('li');

  li.innerHTML = value;
  messages.appendChild(li);
}


form.addEventListener('submit', event => {  //ентер по полю инпута полылает содержимое инпута на сервер
  event.preventDefault();
  socketClient.emit('chat', input.value);  //изменили относительно использования ws
  input.value = ''
})

socketClient.on('connect', () => setStatus('onLine'));            //подключение произошло. Срабатывает.
socketClient.on('disconnect', () => setStatus('onLine is shated')); //подключение завершилось

socketClient.on('chat', messege => printMessage(messege))
socketClient.on('ready', messege => printMessage(messege))