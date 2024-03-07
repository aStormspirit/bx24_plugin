import React from 'react'
import ChatList from '../features/dialogs/ui/ChatList'
import { Outlet } from 'react-router-dom'
import Profile from '../features/profile/Profile'

const Chat: React.FC = () => {
  return (
    <div className="grid h-screen grid-cols-3 gap-4">
      <aside className="col-span-1 bg-gray-100 p-4">
        <Profile />
        <h3 className="font-semibold mb-2">Чаты</h3>
        <ChatList />
      </aside>
      <main className="col-span-2 p-4 flex flex-col">
        <Outlet />
      </main>
    </div>
  )
}

export default Chat
