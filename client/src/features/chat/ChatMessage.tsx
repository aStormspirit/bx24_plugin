import React from 'react'

const ChatMessage = ({ message }: { message: string }) => {
  return (
    <div className="p-2 bg-gray-200 rounded-lg">
      <p className="text-sm">{message}</p>
    </div>
  )
}

export default ChatMessage
