import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { CheckInProvider } from './contexts/CheckInContext.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <CheckInProvider>
                <App />
            </CheckInProvider>
        </ThemeProvider>
    </StrictMode>,
)
