import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../pages/App'
import Chat from '../pages/Chat'
import ChatWindow from '../features/chat/ChatWindow'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/chat',
    element: <Chat />,
    children: [
      {
        path: ':id',
        element: <ChatWindow />,
      },
    ],
  },
])

export function RouteProvider() {
  return <RouterProvider router={router} />
}
