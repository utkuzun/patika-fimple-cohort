import React, { useState } from 'react'

import { usePaymentsContext } from '../contexts/paymentsContext'

import Payment from './Payment'

const Payments = () => {
  const { payments } = usePaymentsContext()
  const [slider, setSlider] = useState('basit')

  const { bilesik, basit } = payments

  const { payback, totalAmount } = slider === 'basit' ? basit : bilesik

  if (payback.length === 0) {
    return null
  }

  const toggleSlider = () => {
    const newSlider = slider === 'basit' ? 'bileşik' : 'basit'
    setSlider(newSlider)
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
        <div className='total-amount'>{totalAmount.toFixed(2)}</div>
      </div>
      <table>
        <thead>
          <tr>
            <td>Taksit No</td>
            <td>Taksit Tutarı</td>
            <td>Kalan Ana Para</td>
            <td>Ana Para</td>
            <td>Kar Tutarı</td>
            <td>KKDF</td>
            <td>BSMV</td>
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
