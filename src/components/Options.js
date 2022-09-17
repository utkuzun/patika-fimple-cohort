import React, { useState } from 'react'

import { usePaymentsContext } from '../contexts/paymentsContext'
import { useInfoContext } from '../contexts/infoContext'

const Options = () => {
  const { createPayments, resetPayments } = usePaymentsContext()
  const { displayInfo } = useInfoContext()

  const initialValues = {
    balance: 100000,
    period: 'aylık',
    numberOfPeriods: 12,
    interestRate: 2.28,
    bsmv: 10,
    kkdf: 15,
  }

  const messageMap = {
    balance: 'Lütfen kredi miktarını giriniz!!',
    numberOfPeriods: 'Lütfen vade miktarını giriniz!!',
    interestRate: 'Lütfen kar oranı değerini giriniz!!',
    bsmv: 'Lütfen BSMV değerini giriniz!!',
    kkdf: 'Lütfen KKDF değerini giriniz!!',
  }

  const [formOptions, setFormOptions] = useState(initialValues)

  const periodOptions = ['aylık', 'yıllık', 'haftalık']

  const handleSubmit = (e) => {
    e.preventDefault()
    resetPayments()
    const errors = Object.entries(formOptions)
      .map(([input, value]) => {
        if (!value || value < 0) {
          return {
            errorName: input,
            message: messageMap[input],
          }
        }
      })
      .filter((item) => item !== undefined)

    if (errors.length > 0) {
      displayInfo(errors)
      return
    }

    createPayments({
      ...formOptions,
      bsmv: formOptions.bsmv / 100,
      kkdf: formOptions.kkdf / 100,
      interestRate: formOptions.interestRate / 100,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormOptions({ ...formOptions, [name]: value })
  }

  return (
    <section className='flex-col'>
      <h4>Kredi bilgilerini gir</h4>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='balance'>Miktar (&#8378;) :</label>
          <input
            className='form-content'
            type='number'
            name='balance'
            min='0'
            value={formOptions.balance}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Taksit Seçeneği : </label>
          <select
            className='form-content'
            name='period'
            value={formOptions.period}
            onChange={handleChange}
          >
            {periodOptions.map((period) => (
              <option key={period} value={period}>
                {period}
              </option>
            ))}
          </select>
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Vade : </label>
          <input
            className='form-content'
            type='number'
            step='1'
            min='0'
            name='numberOfPeriods'
            value={formOptions.numberOfPeriods}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Kar Oranı(%) :</label>
          <input
            className='form-content'
            type='number'
            step='0.01'
            min='0'
            name='interestRate'
            value={formOptions.interestRate}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>BSMV(%) : </label>
          <input
            className='form-content'
            type='number'
            name='bsmv'
            min='0'
            value={formOptions.bsmv}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>KKDF(%) : </label>
          <input
            className='form-content'
            type='number'
            name='kkdf'
            min='0'
            value={formOptions.kkdf}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Hesapla</button>
      </form>
    </section>
  )
}

export default Options
