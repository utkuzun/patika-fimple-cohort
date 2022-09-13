import React, { useState, createContext, useContext } from 'react'

const OptionsContext = createContext()

const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState({
    balance: 100000,
    period: 'aylık',
    numberOfPeriods: 12,
    interestRate: 2.28,
    bsmv: 10,
    kkdf: 15,
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
