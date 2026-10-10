import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// Used at build time by scripts/prerender.mjs so crawlers and link previews get full HTML
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
