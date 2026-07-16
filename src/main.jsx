import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './redesign.css'
import './contact.css'
import './hero-80-20.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
