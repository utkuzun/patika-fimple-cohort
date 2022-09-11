import React, { useState } from 'react'

import { useOptionsContext } from '../contexts/optionsContext'

const Options = () => {
  const [optionsForm, setOptionsForm] = useState({
    balance: 0,
    numberOfPeriods: 0,
    interestRate: 0,
    period: 'aylık',
    bsmv: 5,
    kkdf: 15,
  })

  const { setOptions } = useOptionsContext()

  const periodOptions = ['aylık', 'yıllık', 'haftalık']

  const handleSubmit = (e) => {
    e.preventDefault()
    setOptions(optionsForm)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setOptionsForm({ ...optionsForm, [name]: value })
  }

  return (
    <section>
      <h4>Kredi bilgilerini gir</h4>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='balance'>Miktar : </label>
          <input
            type='number'
            step='5000'
            name='balance'
            value={optionsForm.balance}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Taksit Seçeneği : </label>
          <select name='period' onChange={handleChange}>
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
            type='number'
            name='numberOfPeriods'
            value={optionsForm.numberOfPeriods}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Kar Oranı : </label>
          <input
            type='number'
            step='5000'
            name='interestRate'
            value={optionsForm.interestRate}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>BSMV : </label>
          <input
            type='number'
            name='bsmv'
            value={optionsForm.bsmv}
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>KKDF : </label>
          <input
            type='number'
            name='kkdf'
            value={optionsForm.kkdf}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Hesapla</button>
      </form>
    </section>
  )
}

export default Options
