import React, { createContext, useContext, useState } from 'react'
import _ from 'lodash'

const PaymentsContext = createContext()

const PaymentsProvider = ({ children }) => {
  const [payments, setPayments] = useState([])

  const createPayments = (options) => {
    const { balance, numberOfPeriods, interestRate, bsmv, kkdf, period } =
      options

    console.log(options, 'options')
    const n = numberOfPeriods

    let i = interestRate * (1 + bsmv + kkdf)
    let interest = interestRate

    if (period === 'haftalık') {
      i = i / 4
      interest = interestRate / 4
    }
    if (period === 'yıllık') {
      i = i * 12
      interest = interestRate * 12
    }

    console.log(i, 'rate')
    const paymentAmount = (balance * (i * (1 + i) ** n)) / ((1 + i) ** n - 1)

    let paymentsInit = _.times(numberOfPeriods, _.constant({}))

    let balanceVar = balance

    console.log(paymentAmount, 'paymentAmount')
    const paymentsFinal = paymentsInit.map((payment, index) => {
      const paymentNew = {}

      paymentNew.id = index + 1
      paymentNew.gain = balanceVar * interest
      paymentNew.bsmv = paymentNew.gain * bsmv
      paymentNew.kkdf = paymentNew.gain * kkdf
      paymentNew.mainMoney =
        paymentAmount - paymentNew.gain - paymentNew.bsmv - paymentNew.kkdf
      balanceVar = balanceVar - paymentNew.mainMoney
      paymentNew.remains = balanceVar

      return paymentNew
    })
    setPayments(paymentsFinal)
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
