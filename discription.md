ПРОСТЕЙШИЙ WEBSOCKET в чистом виде
https://coursehunter.net/course/znakomstvo-s-websocket

A. Сервер
Этот сервер - не для запуска клиента. Этот сервер- носитель WEBSOCKET-интегратора, 
к которому обращаются socket'ы запущенных на клиентах экземпляров сайта.
npm i ws --save

запуск сервера из папки проекта
node server


Б. Клиент
WebSocket у клиента- от броузера, создается by
const ws = new WebSocket('ws://localhost:3000'); 
где 'ws://localhost:3000'- URL сервера(WEBSOCKET-интегратора)

npm i -g http-server
в другом терминале запускаем клинета из папки client
http-server

в броузере открываем http://localhost:8080/
но он также запускается и на http://127.0.0.1:8080/

если что-то не работает- в консоле броузера/network должна стоять галочка Disable cache.

....
набираем в инпуте- оно поступает на сервер, а сервер отправляет всем подключенным клиентам
открыли еще одну вкладку в броузере с тем же самым URL - это у нас будет еще один клиент

если в сервер остановим by ctrl+C, то на клиентах появиться надпись "onLine is shuted"



