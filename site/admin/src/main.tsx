import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './aConnection/bShadcnConnection/index.css'
import AppConnection from './aConnection/aAppConnection'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppConnection />
  </StrictMode>,
)
