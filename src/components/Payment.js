import React from 'react'

const Payment = ({ payment }) => {
  const { id, paymentAmount, gain, bsmv, kkdf, mainMoney, remains } = payment

  return (
    <tr>
      <td>{id}</td>
      <td>{paymentAmount.toFixed(2)}</td>
      <td>{Math.abs(remains.toFixed(2))}</td>
      <td>{mainMoney.toFixed(2)}</td>
      <td>{gain.toFixed(2)}</td>
      <td>{bsmv.toFixed(2)}</td>
      <td>{kkdf.toFixed(2)}</td>
    </tr>
  )
}

export default Payment
