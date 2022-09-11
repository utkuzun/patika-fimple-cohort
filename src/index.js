import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import OptionsProvider from './contexts/optionsContext'
import PaymentsProvider from './contexts/paymentsContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <OptionsProvider>
      <PaymentsProvider>
        <App />
      </PaymentsProvider>
    </OptionsProvider>
  </React.StrictMode>
)
