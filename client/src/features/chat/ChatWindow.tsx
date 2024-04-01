import React, { useState, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import useGetMessage from '../../entities/gialogs/useGetMessage'
import { useParams } from 'react-router-dom'

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<any>([])
  let { id } = useParams()
  const { data, isFetched } = useGetMessage(id)

  useEffect(() => {
    if (data && isFetched) {
      setMessages(data)
    }
  }, [isFetched, data])

  return (
    <>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex-1 overflow-y-scroll">
        <div className="p-6 space-y-4">
          {messages.map((message: any) => (
            <ChatMessage key={message.messageid} message={message.message} />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <textarea
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type your message here."
          ></textarea>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Send
          </button>
        </div>
      </div>
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
