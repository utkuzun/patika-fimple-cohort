import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import PaymentsProvider from './contexts/paymentsContext'
import InfoProvider from './contexts/infoContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <InfoProvider>
      <PaymentsProvider>
        <App />
      </PaymentsProvider>
    </InfoProvider>
  </React.StrictMode>
)
