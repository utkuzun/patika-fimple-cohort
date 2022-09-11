import React from 'react'

import { useOptionsContext } from '../contexts/optionsContext'
import { useForm } from 'react-hook-form'

const Options = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const { setOptions } = useOptionsContext()

  const initialValues = {
    balance: 0,
    period: '',
    numberOfPeriods: 0,
    interestRate: 2.28,
    bsmv: 5,
    kkdf: 15,
  }

  const periodOptions = ['aylık', 'yıllık', 'haftalık']

  const onSubmit = (data) => {
    setOptions(data)
  }
  console.log(errors)

  return (
    <section>
      <h4>Kredi bilgilerini gir</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-input'>
          <label htmlFor='balance'>Miktar : </label>
          <input
            defaultValue={initialValues.balance}
            type='number'
            {...register('balance', {
              required: true,
              min: {
                value: 5000,
                message: 'En az 5000 TL lik bir miktar giriniz!!',
              },
            })}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Taksit Seçeneği : </label>
          <select
            defaultValue={initialValues.period}
            {...register('period', { required: true })}
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
            defaultValue={initialValues.numberOfPeriods}
            type='number'
            {...register('numberOfPeriods', { required: true })}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Kar Oranı : </label>
          <input
            type='number'
            defaultValue={initialValues.interestRate}
            {...register('interestRate', { required: true })}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>BSMV : </label>
          <input
            type='number'
            defaultValue={initialValues.bsmv}
            name='bsmv'
            {...register('bsmv', { required: true })}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>KKDF : </label>
          <input
            type='number'
            defaultValue={initialValues.kkdf}
            name='kkdf'
            {...register('kkdf', { required: true })}
          />
        </div>
        <button type='submit'>Hesapla</button>
      </form>
    </section>
  )
}

export default Options