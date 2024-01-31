import TokenForm from '../widgets/TokenForm'
import TokenList from '../features/list/TokenList'
import { useEffect, useState } from 'react'
import CodeForm from '../features/code/CodeForm'
import WebSocketClient from '../entities/webSocket/WebSocketClient'

function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws')

    socket.onopen = () => {
      console.log('WebSocket connected')
      // Отправка данных на сервер
      socket.send(JSON.stringify({ message: 'Hello WebSocket Server!' }))
    }

    socket.onmessage = (event) => {
      const messageFromServer = event.data
      console.log('Received message from WebSocket server:', messageFromServer)
      // Обработка полученных данных
    }

    socket.onerror = (event) => {
      // Обрабатываем ошибку со стороны сервера
      console.log(event)
    }
  }, [])

  return (
    <div className="h-full">
      <div className="flex justify-center">
        <header className="mt-[12px] w-1/2 bg-white rounded-lg text-[24px] flex justify-center">
          <h1>Добро пожаловать, {1}</h1>
        </header>
      </div>
      <div className="flex mt-[12px] justify-around">
        <TokenForm />
        <TokenList />
      </div>
      <div className="flex items-center justify-center pb-2">
        {open && <CodeForm setOpen={setOpen} />}
        <button onClick={() => setOpen(!open)}>Чат</button>
        {/* <UiLink
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          href="/chat"
          variant="primary"
        >
          Перейти в чат
        </UiLink> */}
      </div>
    </div>
  )
}

export default App
