import React from 'react'

import { usePaymentsContext } from '../contexts/paymentsContext'
import { parsePayments } from '../utils/numberHelpers'

import Payment from './Payment'

const Payments = ({ slider, toggleSlider }) => {
  const { payments } = usePaymentsContext()

  const { bilesik, basit } = payments

  const { payback, totalAmount } = slider === 'basit' ? basit : bilesik

  if (payback.length === 0) {
    return null
  }

  return (
    <section className='flex-col'>
      <h4>Geri Ödeme Bilgileri</h4>
      <div className='slider'>
        <div className='box' onClick={toggleSlider}>
          <div
            className={`slider-tab ${slider === 'basit' ? 'right' : ''}`}
          ></div>
          <span>Basit Faiz</span>
          <span>Bileşik Faiz</span>
        </div>
        <div className='total-amount'>{parsePayments(totalAmount)}</div>
      </div>
      <table>
        <thead>
          <tr>
            <td>Taksit No</td>
            <td>Taksit Tutarı</td>
            <td>Kalan Ana Para</td>
            <td>Ana Para</td>
            <td>Kar Tutarı</td>
            <td>BSMV</td>
            <td>KKDF</td>
          </tr>
        </thead>
        <tbody>
          {payback.map((payment) => (
            <Payment key={payment.id} payment={payment} />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Payments
