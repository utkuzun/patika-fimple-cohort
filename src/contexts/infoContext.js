import React, { createContext, useContext, useState } from 'react'

const InfoContext = createContext()

const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState([])

  const displayInfo = (info) => {
    setInfo(info.slice(0, 2))
    setTimeout(() => {
      setInfo([])
    }, 2000)
  }

  return (
    <InfoContext.Provider value={{ info, displayInfo }}>
      {children}
    </InfoContext.Provider>
  )
}

export const useInfoContext = () => {
  return useContext(InfoContext)
}

export default InfoProvider
