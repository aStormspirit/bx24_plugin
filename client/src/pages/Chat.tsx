import React from 'react'
import { useQuery } from 'react-query'

const Chat = () => {
  const { data, isLoading, error } = useQuery('repoData', () =>
    fetch('http://localhost:8000/telegram/me').then((res) => res.json())
  )

  console.log(data)

  return (
    <div className="grid h-screen grid-cols-3 gap-4">
      <aside className="col-span-1 bg-gray-100 p-4">
        <div className="flex items-center space-x-2 mb-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
            <img
              className="aspect-square h-full w-full"
              alt="User avatar"
              src="/placeholder.svg?height=36&amp;width=36"
            />
          </span>
          <div>
            <h2 className="font-bold">Username</h2>
            <p className="text-sm text-gray-600">Online</p>
          </div>
        </div>
        <h3 className="font-semibold mb-2">Chats</h3>
        <nav className="space-y-2">
          <a className="block py-2 px-3 rounded hover:bg-gray-200" href="#">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 ml-2 bg-red-500 text-white text-xs">
              3
            </div>
            Chat 1
          </a>
          <a className="block py-2 px-3 rounded hover:bg-gray-200" href="#">
            Chat 2
          </a>
          <a className="block py-2 px-3 rounded hover:bg-gray-200" href="#">
            Chat 3
          </a>
        </nav>
      </aside>
      <main className="col-span-2 p-4 flex flex-col">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm flex-1 overflow-y-scroll"
          data-v0-t="card"
        >
          <div className="p-6 space-y-4">
            <div className="flex items-start space-x-2 mb-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                <img
                  className="aspect-square h-full w-full"
                  alt="Other user avatar"
                  src="/placeholder.svg?height=28&amp;width=28"
                />
              </span>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p className="text-sm">Hello!</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 mb-4 ml-auto">
              <div className="p-2 bg-blue-200 rounded-lg">
                <p className="text-sm">Hi, how can I help you today?</p>
              </div>
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                <img
                  className="aspect-square h-full w-full"
                  alt="User avatar"
                  src="/placeholder.svg?height=28&amp;width=28"
                />
              </span>
            </div>
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
      </main>
    </div>
  )
}

export default Chat
