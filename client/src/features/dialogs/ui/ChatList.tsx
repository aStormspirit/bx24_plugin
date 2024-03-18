import React, { useEffect, useState } from 'react'
import useGetDialogs from '../../../entities/gialogs/useGetDialogs'
import ChatItem from './ChatItem'
import { DialogType } from '@src/shared/types'
import UiSpinner from '../../../shared/ui/spinner'

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<DialogType[]>([])
  const { data, isLoading, isError, isFetched } = useGetDialogs()

  useEffect(() => {
    if (data) {
      setChats(data.data)
    }
  }, [data])

  return (
    <nav className="space-y-2 h-[40vw] overflow-scroll">
      {isLoading && <UiSpinner />}
      {isError && <div>Error</div>}
      {isFetched &&
        chats.map((dialog: DialogType) => {
          return (
            <ChatItem
              key={dialog.chat_id}
              chat_name={dialog.chat_name}
              chat_id={dialog.chat_id}
            />
          )
        })}
    </nav>
  )
}

export default ChatList
