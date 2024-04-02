# Устанавливаем базовый образ
FROM python:3.10

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы зависимостей в рабочую директорию
COPY requirements.txt .

# Устанавливаем зависимости
RUN pip install -r requirements.txt

# Копируем исходный код в рабочую директорию
COPY . .

RUN openssl genrsa -out certs/jwt-private.pem 2048 && openssl rsa -in certs/jwt-private.pem -outform PEM -pubout -out certs/jwt-public.pem

# Экспозируем порт
EXPOSE 8000

# Запускаем приложение
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]