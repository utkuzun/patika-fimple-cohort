import React, { createContext, useContext, useState } from 'react'

import {
  createBasitPayments,
  createBilesikPayments,
} from '../utils/paymentsHelper'

const PaymentsContext = createContext()

const PaymentsProvider = ({ children }) => {
  const [payments, setPayments] = useState({
    bilesik: { totalAmount: 0, payback: [] },
    basit: { totalAmount: 0, payback: [] },
  })

  const createPayments = (options) => {
    const { basitFinal, totalBasit } = createBasitPayments(options)
    const { totalBilesik, bilesikFinal } = createBilesikPayments(options)

    const bilesik = { totalAmount: totalBilesik, payback: bilesikFinal }
    const basit = { totalAmount: totalBasit, payback: basitFinal }

    setPayments({ basit, bilesik })
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
