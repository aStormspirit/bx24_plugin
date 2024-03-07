import React from 'react'
import { Link } from 'react-router-dom'

const ChatItem: React.FC<{ chat_name: string; chat_id: string }> = ({
  chat_name,
  chat_id,
}) => {
  return (
    <Link
      className="block py-2 px-3 rounded hover:bg-gray-200"
      to={`${chat_id}`}
    >
      {false && (
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 ml-2 bg-red-500 text-white text-xs">
          3
        </div>
      )}
      {chat_name}
    </Link>
  )
}

export default ChatItem
