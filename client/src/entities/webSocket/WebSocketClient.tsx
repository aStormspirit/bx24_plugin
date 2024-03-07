import { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import useWebSocket from 'react-use-websocket'

const WebSocketClient = () => {
  // const queryClient = useQueryClient()
  // // Создаем WebSocket-подключение
  // const socketUrl = 'ws://localhost:8000/ws'
  // const {
  //   sendMessage,
  //   sendJsonMessage,
  //   lastMessage,
  //   lastJsonMessage,
  //   readyState,
  //   getWebSocket,
  // } = useWebSocket(socketUrl, {
  //   onOpen: () => console.log('opened'),
  //   //Will attempt to reconnect on all close events, such as server shutting down
  //   shouldReconnect: (closeEvent) => true,
  //   share: true,
  // })
  // return { sendJsonMessage, getWebSocket }
}

export default WebSocketClient
