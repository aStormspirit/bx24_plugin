import { useState } from 'react'
import UiInput from '../../../shared/ui/Input'
import { UiButton } from '../../../shared/ui/button'
import useWebSocket from 'react-use-websocket'
import { UserType } from '@src/shared/types'
import useCreateUser from '../../../entities/users/useCreateUser'

interface CodeFormProps {
  setOpen: (open: boolean) => void
  data: UserType
}

const CodeForm: React.FC<CodeFormProps> = ({ setOpen, data }) => {
  // const [close, setClose] = useState(true)
  // const { register, handleSubmit } = useForm<any>()
  const { createUser } = useCreateUser()
  const [code, setCode] = useState('')
  const socketUrl = 'ws://localhost:8000/ws'
  const { sendJsonMessage: send, lastMessage } = useWebSocket(socketUrl)

  console.log(lastMessage?.data, 'lastMessage')

  const sendData = () => {
    send(data)
  }

  const sendCode = () => {
    send(code)
    createUser(data)
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-600">
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
        <UiButton onClick={() => sendData()} variant="primary">
          Получить код
        </UiButton>
        <UiButton onClick={() => sendCode()} variant="primary">
          Отправить код
        </UiButton>
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
