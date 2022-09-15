import React, { useState } from 'react'

import { usePaymentsContext } from '../contexts/paymentsContext'

const Options = () => {
  const { createPayments } = usePaymentsContext()

  const initialValues = {
    balance: 100000,
    period: 'aylık',
    numberOfPeriods: 12,
    interestRate: 2.28,
    bsmv: 10,
    kkdf: 15,
  }

  const [formOptions, setFormOptions] = useState(initialValues)

  const periodOptions = ['aylık', 'yıllık', 'haftalık']

  const handleSubmit = (e) => {
    e.preventDefault()

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

  // useEffect(() => {
  //   setInfo(errors)
  //   setTimeout(() => {
  //     setInfo()
  //   }, 2000)
  // }, [errors])

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
