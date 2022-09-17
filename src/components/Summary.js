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

      <div className='slider'>
        <div className='total-amount'>
          Toplam Geri Ödeme :{parsePayments(totalAmount)}
        </div>
        <div className='total-amount'>
          Toplam Faiz :{parsePayments(totalGain)}
        </div>
        <div className='total-amount'>
          Toplam Vergiler Dahil Faiz :{parsePayments(totalGainWithTaxes)}
        </div>
      </div>
    </section>
  )
}

export default Summary
