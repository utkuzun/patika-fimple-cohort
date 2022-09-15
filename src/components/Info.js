import React from 'react'

const Info = ({ info }) => {
  if (!info) {
    console.log('null info')
    return
  }

  const messages = Object.entries(info).map(([errorName, { message }]) => {
    return { errorName, message }
  })

  return (
    <div className='info-div'>
      {messages.map(({ errorName, message }) => {
        return (
          <p className='info-content' key={errorName}>
            {message}
          </p>
        )
      })}
    </div>
  )
}
export default Info
