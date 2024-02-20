import { useEffect } from 'react'

const WebSocketClient = () => {
  // Создаем WebSocket-подключение
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws') // Укажите URL вашего WebSocket-сервера

    // Обработчик события при открытии соединения
    socket.onopen = () => {
      console.log('WebSocket connected')
      // Отправка данных на сервер
      socket.send(JSON.stringify({ message: 'Hello WebSocket Server!' }))
    }

    // Обработчик получения сообщения от сервера
    socket.onmessage = (event) => {
      console.log('Received message from WebSocket server:', event.data)
      // Обновление данных в React Query
      // вызовите необходимую функцию для работы с React Query для обновления данных
    }

    // Обработчик закрытия соединения
    socket.onclose = () => {
      console.log('WebSocket disconnected')
      // Очистка данных React Query при разрыве соединения
      // вызовите необходимую функцию для работы с React Query для очистки данных
    }

    return () => {
      // Закрываем WebSocket-соединение при размонтировании компонента
      socket.close()
    }
  }, [])

  return { true: true }
}

export default WebSocketClient
