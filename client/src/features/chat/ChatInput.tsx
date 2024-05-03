import useSendMessage from '../../entities/gialogs/useSendMessage'
import { useForm, SubmitHandler } from 'react-hook-form'
import { UiTextField } from '../../shared/ui/textField'
import { authInstance } from '../../shared/api/api-instance'

const ChatInput = ({ id }: any) => {
  const { register, handleSubmit, reset } = useForm<any>()

  const sendMessages = async (message: string) => {
    return authInstance.post(`/telegram/send_message?chat_id=${id}`, {
      message,
    })
  }

  const onSubmit: SubmitHandler<any> = (message: any) => {
    sendMessages(message.message)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="flex w-full items-center space-x-2">
        <UiTextField
          className="w-full"
          inputProps={{
            placeholder: 'Type your message here...',
            ...register('message'),
          }}
        ></UiTextField>
        <button className="inline-flex bg-blue-500 items-center justify-center rounded-md text-sm font-medium bg-primary text-white h-10 px-4 py-2">
          Send
        </button>
      </div>
    </form>
  )
}

export default ChatInput
