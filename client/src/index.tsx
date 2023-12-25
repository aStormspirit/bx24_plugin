import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/tailwind.css'
import { QueryProvider } from './app/queryProvider'
import { Provider } from './app/routerProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryProvider>
      <Provider />
    </QueryProvider>
  </React.StrictMode>
)
