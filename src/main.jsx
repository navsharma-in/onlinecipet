import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BotNav from './components/BotNav/BotNav'
import { Navbar } from './components/Navbar/Navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <BotNav />
  </React.StrictMode>,
)
