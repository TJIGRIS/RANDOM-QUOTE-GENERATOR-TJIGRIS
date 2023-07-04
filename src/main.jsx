import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuoteProvider } from './context/QuoteProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QuoteProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuoteProvider>
)
