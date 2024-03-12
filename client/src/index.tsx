import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryProvider } from './app/queryProvider'
import { RouteProvider } from './app/routerProvider'
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <RouteProvider />
      </QueryProvider>
    </Provider>
  </React.StrictMode>
)
