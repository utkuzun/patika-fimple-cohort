import React from 'react'

import { summarizePayments } from '../utils/paymentsHelper'
import { parsePayments } from '../utils/numberHelpers'
import { usePaymentsContext } from '../contexts/paymentsContext'

const Summary = ({ slider }) => {
  const { payments } = usePaymentsContext()

  if (payments.basit.payback.length === 0) {
    return null
  }

  const summary = summarizePayments(payments)

  const { basit, bilesik } = summary

  const { totalAmount, totalGain, totalGainWithTaxes } =
    slider === 'basit' ? basit : bilesik

  return (
    <section className='flex-col'>
      <h4>Kredi Özet Bilgileri</h4>

      <div className='slider summary'>
        <div className='total-amount summary'>
          <span> Faiz Türü : </span>
          {`${slider === 'basit' ? 'Basit Faiz' : 'Bileşik Faiz'}`}
        </div>
        <div className='total-amount summary'>
          <span> Toplam Geri Ödeme : </span>
          {parsePayments(totalAmount)}
        </div>
        <div className='total-amount summary'>
          <span> Toplam Faiz : </span>
          {parsePayments(totalGain)}
        </div>
        <div className='total-amount summary'>
          <span> Toplam Vergiler Dahil Faiz : </span>
          {parsePayments(totalGainWithTaxes)}
        </div>
      </div>
    </section>
  )
}

export default Summary
