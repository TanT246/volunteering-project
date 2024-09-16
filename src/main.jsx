import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Notif from './components/notif.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Notif />
  </StrictMode>,
)
