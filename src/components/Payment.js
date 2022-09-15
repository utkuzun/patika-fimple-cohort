import React from 'react'
import { parsePayments } from '../utils/numberHelpers'

const Payment = ({ payment }) => {
  const { id, paymentAmount, gain, bsmv, kkdf, mainMoney, remains } = payment

  return (
    <tr>
      <td>{id}</td>
      <td>{parsePayments(paymentAmount)}</td>
      <td>{parsePayments(remains)}</td>
      <td>{parsePayments(mainMoney)}</td>
      <td>{parsePayments(gain)}</td>
      <td>{parsePayments(bsmv)}</td>
      <td>{parsePayments(kkdf)}</td>
    </tr>
  )
}

export default Payment
