import TokenForm from '../widgets/TokenForm'
import TokenList from '../features/ui/list/TokenList'
import { useState } from 'react'
import CodeForm from '../features/ui/form/CodeForm'
import { useSelector } from 'react-redux'
import useWebSocket from 'react-use-websocket'
import { useNavigate } from 'react-router-dom'
import { UserType } from '@src/shared/types'

type ReduxUserState = {
  store: {
    data: UserType[]
  }
}

function App() {
  const [open, setOpen] = useState(false)
  const config = useSelector((state: ReduxUserState) => state.store.data[0])
  const navigate = useNavigate()

  const socketUrl = 'ws://localhost:8000/ws'

  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  })

  function startSession() {
    setOpen(!open)
    sendMessage(JSON.stringify(config))
    navigate('/chat')
  }

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
        {/* {open && <CodeForm setOpen={setOpen} sendMessage={} />} */}
        <button onClick={() => startSession()}>Чат</button>
      </div>
    </div>
  )
}

export default App
