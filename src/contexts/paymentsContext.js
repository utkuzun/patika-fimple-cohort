import React, { createContext, useContext, useState } from 'react'

const PaymentsContext = createContext()

const PaymentsProvider = ({ children }) => {
  const [payments, setPayments] = useState([])

  return (
    <PaymentsContext.Provider value={{ payments, setPayments }}>
      {children}
    </PaymentsContext.Provider>
  )
}

export const usePaymentsContext = () => {
  return useContext(PaymentsContext)
}

export default PaymentsProvider
