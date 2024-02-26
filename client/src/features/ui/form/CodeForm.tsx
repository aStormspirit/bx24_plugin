import { useState, useEffect } from 'react'
import UiInput from '../../../shared/ui/Input'
import { UiButton } from '../../../shared/ui/button'
import { UiLink } from '../../../shared/ui/link'
import { useForm, SubmitHandler } from 'react-hook-form'

interface CodeFormProps {
  setOpen: (open: boolean) => void
  sendMessage: (message: string) => void
}

const CodeForm: React.FC<CodeFormProps> = ({ setOpen, sendMessage }) => {
  const [close, setClose] = useState(true)
  const { register, handleSubmit } = useForm<any>()

  const sendCode: SubmitHandler<{ code: string }> = ({ code }) => {
    sendMessage(JSON.stringify(code))
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-600">
      <form
        onSubmit={handleSubmit(sendCode)}
        className="bg-white rounded-lg p-4 flex flex-col items-end"
      >
        <div onClick={() => setOpen(false)}>
          <Close />
        </div>
        <UiInput
          inputProps={{
            placeholder: 'Введите код',
            ...register('code'),
          }}
          className="rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none"
        />
        {close && <UiButton variant="primary">Отправить код</UiButton>}
      </form>
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
