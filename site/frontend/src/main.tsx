import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// index.jsx & index.css
import './aConnection/bShadcnConnection/index.css'
import "@fontsource/lora/400.css";
import "@fontsource/lora/700.css";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/700.css";
import AppConnection from './aConnection/aAppConnection/index.tsx'

//  Provider
import { Provider as ReduxProvider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter }   from 'react-router-dom'
import { ThemeProvider } from './aConnection/bShadcnConnection/components/theme-provider.tsx'
import { SocketProvider } from './aConnection/fSocketConnection/index.tsx'

// XXX XXXX XXXX
import reduxConnection from './aConnection/dReduxConnection/index.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={reduxConnection} >
      <SocketProvider>
        <HelmetProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
              <AppConnection />
            </BrowserRouter>
          </ThemeProvider>
        </HelmetProvider>
      </SocketProvider>
    </ReduxProvider>    
  </StrictMode>,
)
