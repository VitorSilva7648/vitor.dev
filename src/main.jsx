import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Follow the OS/browser color-scheme preference and keep it in sync with
// Bootstrap's color mode attribute, so both custom CSS (index.css) and
// Bootstrap's own component styling (form controls, carousel, etc.) render
// consistently instead of mixing light and dark pieces.
const applyColorScheme = (prefersDark) => {
  document.documentElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
};

const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
applyColorScheme(darkSchemeQuery.matches);
darkSchemeQuery.addEventListener('change', (event) => applyColorScheme(event.matches));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
