import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../pages/App'
import Chat from '../pages/Chat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
])

export function Provider() {
  return <RouterProvider router={router} />
}
