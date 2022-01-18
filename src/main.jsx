import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ConnectionProvider } from './context/ConnectionContext'

ReactDOM.render(
  <ConnectionProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </ConnectionProvider>,
  document.getElementById('root')
)
