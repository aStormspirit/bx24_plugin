import { useState } from 'react'
import UiInput from '../../../shared/ui/Input'
import { UiButton } from '../../../shared/ui/button'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { UserType } from '@src/shared/types'
import useCreateUser from '../../../entities/users/useCreateUser'
import Sucsess from './Sucsess'
import { API_URL } from '../../../shared/api/routes'

interface CodeFormProps {
  setOpen: (open: boolean) => void
  data: UserType
}

const CodeForm: React.FC<CodeFormProps> = ({ setOpen, data }) => {
  const { createUser } = useCreateUser()
  const [code, setCode] = useState('')
  const [button, setButton] = useState(false)
  const socketUrl = `ws://${API_URL}:8000/ws`

  const {
    sendJsonMessage: send,
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl)

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState]

  const sendData = () => {
    send(data)
    setButton(!button)
    createUser(data)
  }

  const sendCode = () => {
    send(code)
  }

  if (readyState === ReadyState.CLOSED && lastMessage?.data == 'Успешно') {
    console.log(lastMessage)
    setTimeout(() => {
      setOpen(false)
    }, 1000)
    return <Sucsess />
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(75, 85, 99, 0.6)' }}
    >
      <div
        // onSubmit={handleSubmit(sendCode)}
        className="bg-white rounded-lg p-4 flex flex-col items-end"
      >
        <div onClick={() => setOpen(false)}>
          <Close />
        </div>
        <UiInput
          inputProps={{
            placeholder: 'Введите код',
            onChange: (e) => {
              setCode(e.target.value)
            },
          }}
          className="rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none"
        />
        {button ? (
          <UiButton onClick={() => sendCode()} variant="primary">
            Отправить код
          </UiButton>
        ) : (
          <UiButton onClick={() => sendData()} variant="primary">
            Получить код
          </UiButton>
        )}
      </div>
    </div>
  )
}

const Close = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z"
        />
      </svg>
    </div>
  )
}

export default CodeForm
