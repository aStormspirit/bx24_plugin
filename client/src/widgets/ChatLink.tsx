import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChatLink: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center pb-2">
      {/* {open && <CodeForm setOpen={setOpen} sendMessage={} />} */}
      <button onClick={() => navigate('/chat')}>Чат</button>
    </div>
  )
}

export default ChatLink
