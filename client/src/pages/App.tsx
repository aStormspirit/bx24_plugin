import TokenForm from '../widgets/TokenForm'
import TokenList from '../features/list/TokenList'
import { useState } from 'react'
import CodeForm from '../features/code/CodeForm'
import { HashSliceState, ObjType } from '@src/shared/types'
import { useSelector } from 'react-redux'

function App() {
  const [open, setOpen] = useState(false)

  const data: ObjType[] = useSelector(
    (state: { store: HashSliceState }) => state.store.data
  )

  const session = data.filter((el) => el.selected)[0]

  function startSession(){
    setOpen(!open)
    const socket = new WebSocket('ws://localhost:8000/ws') // Укажите URL вашего WebSocket-сервера

    socket.onopen = () => {
      console.log('WebSocket connected')
      // Отправка данных на сервер
      socket.send(JSON.stringify(session))
    }

    socket.onclose = () => {
      console.log('WebSocket disconnected')
    }
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
        {open && <CodeForm setOpen={setOpen} />}
        <button onClick={() => startSession()}>Чат</button>
      </div>
    </div>
  )
}

export default App
