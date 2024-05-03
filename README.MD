React

FASTAPI

1. asyncio gather, попробовать объеденить задачи и исправить ошибки
2. Проверить многопользовательское подключение к websocket, доработать функционал

Загрузить на сервер, протестировать. Починить БД для запросов telethon.

refresh token добавляется контретному пользователю , и хранится до 30 дней. при необходимости обновить access токен передается в заголовке и сверяется с базой

openssl genrsa -out jwt-private.pem 2048
openssl rsa -in jwt-private.pem -outform PEM -pubout -out jwt-public.pem
