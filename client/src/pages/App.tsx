import TokenForm from '../widgets/TokenForm'
import TokenList from '../features/list/TokenList'
import { useState } from 'react'
import CodeForm from '../features/code/CodeForm'
import { HashSliceState, ObjType } from '@src/shared/types'
import { useSelector } from 'react-redux'
import useWebSocket from 'react-use-websocket';

function App() {
  const data: ObjType[] = useSelector(
    (state: { store: HashSliceState }) => state.store.data
  )

  const [open, setOpen] = useState(false)

  const session = data.filter((el) => el.selected)[0]
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
  });

  function startSession(){
    setOpen(!open)
    sendMessage(JSON.stringify(session))
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
        {open && <CodeForm setOpen={setOpen} sendMessage={sendMessage} />}
        <button onClick={() => startSession()}>Чат</button>
      </div>
    </div>
  )
}

export default App
