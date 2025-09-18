import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './aConnection/bShadcnConnection/index.css'
import App from './aConnection/aAppConnection'
import { SocketProvider } from './aConnection/fSocketConnection'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>
  </StrictMode>,
)
