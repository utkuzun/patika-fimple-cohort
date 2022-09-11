import React from 'react'

import { usePaymentsContext } from '../contexts/paymentsContext'

const Payments = () => {
  const { payments } = usePaymentsContext()

  console.log(payments, 'payments')
  return <h4>Payments</h4>
}

export default Payments
