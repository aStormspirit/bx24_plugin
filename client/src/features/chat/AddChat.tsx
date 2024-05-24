import { useState } from 'react'
import { authInstance } from '../../shared/api/api-instance'

const Input: React.FC = () => {
  const [name, setName] = useState('')

  const sendAndclear = () => {
    sendMessages(name)
    setName('')
  }

  const sendMessages = async (name: string) => {
    return authInstance.post(`/telegram/create_chat?chat_name=${name}`)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center space-x-2">
        <input
          className="flex-1"
          placeholder="Enter text"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="" onClick={() => sendAndclear()}>
          Submit
        </button>
      </div>
    </div>
  )
}

export const AddChat: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-end items-center">
      {open && <Input />}
      <svg
        onClick={() => {
          setOpen(!open)
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M256 176v160m80-80H176"
        />
      </svg>
    </div>
  )
}
