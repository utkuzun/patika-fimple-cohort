import React, { createContext, useContext, useState } from 'react'
// import _ from 'lodash'

import { useOptionsContext } from './optionsContext'

const PaymentsContext = createContext()

const PaymentsProvider = ({ children }) => {
  const [payments, setPayments] = useState([])
  const { options } = useOptionsContext()

  const createPayments = () => {
    const { balance } = options

    if (!balance) {
      setPayments([])
    }

    // const paymentAmount =

    // let paymentsInit = _.times(numberOfPeriods, {
    //   id: null,
    //   amount: null,
    //   mainMoney: null,
    //   remains: null,
    //   gain: null,
    //   bsmv: null,
    //   kkdf: null,
    // })

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
