import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../pages/App'
import Chat from '../pages/Chat'
import ChatWindow from '../features/chat/ChatWindow'
import Login from '../pages/Login'
import ProtectedRoutes from '../features/ProtectedRoutes'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
  },
  {
    path: '/chat',
    element: (
      <ProtectedRoutes>
        <Chat />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: ':id',
        element: <ChatWindow />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not found</div>,
  },
])

export function RouteProvider() {
  return <RouterProvider router={router} />
}
