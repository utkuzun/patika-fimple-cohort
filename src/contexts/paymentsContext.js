import React, { createContext, useContext, useState } from 'react'

import { useOptionsContext } from './optionsContext'

const PaymentsContext = createContext()

const PaymentsProvider = ({ children }) => {
  const [payments, setPayments] = useState([])
  const { options } = useOptionsContext()

  const createPayments = () => {
    if (!options.balance) {
      setPayments([])
    }

    setPayments(['akmet'])
  }

  return (
    <PaymentsContext.Provider value={{ payments, setPayments, createPayments }}>
      {children}
    </PaymentsContext.Provider>
  )
}

export const usePaymentsContext = () => {
  return useContext(PaymentsContext)
}

export default PaymentsProvider
