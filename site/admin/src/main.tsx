import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './aConnection/bShadcnConnection/index.css'
import App from './aConnection/aAppConnection'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
