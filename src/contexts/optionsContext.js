import React, { useState, createContext, useContext } from 'react'

const OptionsContext = createContext()

const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState({
    loan: {
      balance: 0,
      period: '',
      numberOfPeriod: 0,
      interestRate: 2.28,
      interestKind: '',
      BSMV: 5,
      KKDF: 15,
    },
    formOptions: {
      periods: ['aylık', 'yıllık', 'haftalık'],
      interestKinds: ['basit', 'bileşik'],
    },
  })

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  )
}

export const useOptionsContext = () => {
  return useContext(OptionsContext)
}

export default OptionsProvider
