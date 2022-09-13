import React from 'react'

import { usePaymentsContext } from '../contexts/paymentsContext'

const Payments = () => {
  const { payments } = usePaymentsContext()

  console.log(payments, 'payments')

  if (!payments.length) {
    return null
  }

  return <h4>Payments</h4>
}

export default Payments
