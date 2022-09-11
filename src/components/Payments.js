import React, { useEffect } from 'react'

import { usePaymentsContext } from '../contexts/paymentsContext'

const Payments = () => {
  const { payments, createPayments } = usePaymentsContext()

  useEffect(() => {
    createPayments()
  }, [])

  if (!payments.length) {
    return null
  }

  return <h4>Payments</h4>
}

export default Payments
