import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Ensure scroll restoration is manual to prevent jumping
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// Reset scroll position on initial page load
window.addEventListener('load', () => {
  window.scrollTo(0, 0)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
