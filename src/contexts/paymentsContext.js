import React, { createContext, useContext, useState } from 'react'
import _ from 'lodash'

const PaymentsContext = createContext()

const PaymentsProvider = ({ children }) => {
  const [payments, setPayments] = useState({
    bilesik: { totalAmount: 0, payback: [] },
    basit: { totalAmount: 0, payback: [] },
  })

  const createPayments = (options) => {
    const { balance, numberOfPeriods, interestRate, bsmv, kkdf, period } =
      options

    const n = numberOfPeriods

    let i = interestRate * (1 + bsmv + kkdf)
    let interest = interestRate

    if (period === 'haftalık') {
      i = i * (7 / 30)
      interest = interestRate / 4
    }
    if (period === 'yıllık') {
      i = i * 12
      interest = interestRate * (365 / 30)
    }

    const amountBilesik = (balance * (i * (1 + i) ** n)) / ((1 + i) ** n - 1)

    let bilesikInit = _.times(numberOfPeriods, _.constant({}))

    let balanceVar = balance

    const bilesikFinal = bilesikInit.map((payment, index) => {
      const paymentNew = {}

      paymentNew.paymentAmount = amountBilesik
      paymentNew.id = index + 1
      paymentNew.gain = balanceVar * interest
      paymentNew.bsmv = paymentNew.gain * bsmv
      paymentNew.kkdf = paymentNew.gain * kkdf
      paymentNew.mainMoney =
        amountBilesik - paymentNew.gain - paymentNew.bsmv - paymentNew.kkdf
      balanceVar = balanceVar - paymentNew.mainMoney
      paymentNew.remains = balanceVar

      return paymentNew
    })

    const totalBilesik = amountBilesik * n

    const bilesik = { totalAmount: totalBilesik, payback: bilesikFinal }
    const basit = { totalAmount: 0, payback: [] }

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
