import React, { useState, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import useGetMessage from '../../entities/gialogs/useGetMessage'
import { useParams } from 'react-router-dom'
import { UiButton } from '../../shared/ui/button'
import UiSpinner from '../../shared/ui/spinner'
import ChatInput from './ChatInput'

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([])
  const [offset, setOffset] = useState<number>(0)
  let { id } = useParams()
  const { data, isFetched, refetch, isLoading } = useGetMessage(id, offset)

  useEffect(() => {
    setMessages(() => [])
  }, [id])

  useEffect(() => {
    if (data && isFetched) {
      setMessages((prev) => [...data, ...prev])
      // console.log(data)

      setOffset(data && data.length > 0 ? data.reverse()[0]['message_id'] : 0)
    }
  }, [isFetched, data])

  return (
    <>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex-1 overflow-y-scroll">
        <div className="p-6 space-y-4 h-[40vw] overflow-scroll">
          {isLoading && <UiSpinner />}
          {isFetched && (
            <UiButton onClick={() => refetch()} variant="secondary">
              Загрузить еще
            </UiButton>
          )}
          {messages.map(
            (
              message: { message: any; message_id: number; date: string },
              id
            ) => (
              <ChatMessage
                key={id}
                message={message.message}
                date={message.date}
              />
            )
          )}
        </div>
      </div>
      <ChatInput id={id} />
    </>
  )
}

export default ChatWindow

//<div className="flex items-start space-x-2 mb-4">
//<span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
//  <img
//    className="aspect-square h-full w-full"
//    alt="Oн"
//    src="/placeholder.svg?height=28&amp;width=28"
//  />
//</span>
//</div>
//<div className="flex items-start space-x-2 mb-4 ml-auto">
//<span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
//  <img
//    className="aspect-square h-full w-full"
//    alt="Я"
//    src="/placeholder.svg?height=28&amp;width=28"
//  />
//</span>
//</div>
