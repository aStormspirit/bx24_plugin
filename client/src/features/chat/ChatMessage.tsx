import React from 'react'

const ChatMessage = ({ message, date }: { message: string; date: string }) => {
  const datetime = new Date(date)
  const dates = `${datetime.getDate()}.${
    datetime.getMonth() + 1
  } ${datetime.getHours()}:${datetime.getMinutes()}`
  return (
    <div className="p-2 bg-gray-200 rounded-lg">
      <p className="text-sm">{message}</p>
      <span>{dates}</span>
    </div>
  )
}

export default ChatMessage
