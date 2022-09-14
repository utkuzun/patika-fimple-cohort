import React from 'react'

import { usePaymentsContext } from '../contexts/paymentsContext'
// import { useOptionsContext } from '../contexts/optionsContext'
import { useForm } from 'react-hook-form'

const Options = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const { createPayments } = usePaymentsContext()

  const initialValues = {
    balance: 100000,
    period: 'aylık',
    numberOfPeriods: 12,
    interestRate: 0,
    bsmv: 10,
    kkdf: 15,
  }

  const periodOptions = ['aylık', 'yıllık', 'haftalık']

  const onSubmit = (data) => {
    createPayments({
      ...data,
      bsmv: data.bsmv / 100,
      kkdf: data.kkdf / 100,
      interestRate: data.interestRate / 100,
    })
  }
  console.log(errors)

  return (
    <section className='flex-col'>
      <h4>Kredi bilgilerini gir</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-input'>
          <label htmlFor='balance'>Miktar : </label>
          <input
            className='form-content'
            defaultValue={initialValues.balance}
            type='number'
            {...register('balance', {
              required: true,
              min: {
                value: 1000,
                message: 'En az 1000 TL lik bir miktar giriniz!!',
              },
            })}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Taksit Seçeneği : </label>
          <select
            className='form-content'
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
            className='form-content'
            defaultValue={initialValues.numberOfPeriods}
            type='number'
            {...register('numberOfPeriods', {
              required: true,
              min: { value: 1, message: 'Lütfen vade sayısını giriniz!!' },
            })}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>Kar Oranı : </label>
          <input
            className='form-content'
            type='number'
            defaultValue={initialValues.interestRate}
            {...register('interestRate', {
              required: true,
              min: { value: 1, message: 'Lütfen kar oranını giriniz!!' },
            })}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>BSMV : </label>
          <input
            className='form-content'
            type='number'
            defaultValue={initialValues.bsmv}
            name='bsmv'
            {...register('bsmv', {
              required: true,
              min: { value: 1, message: 'Lütfen BSMV giriniz!!' },
            })}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='balance'>KKDF : </label>
          <input
            className='form-content'
            type='number'
            defaultValue={initialValues.kkdf}
            name='kkdf'
            {...register('kkdf', {
              required: true,
              min: { value: 1, message: 'Lütfen KKDF giriniz!!' },
            })}
          />
        </div>
        <button type='submit'>Hesapla</button>
      </form>
    </section>
  )
}

export default Options
