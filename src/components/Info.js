import React from 'react'

const Info = ({ info }) => {
  if (info.length === 0) {
    return null
  }

  return (
    <div className=' holder info-div'>
      {info.map(({ errorName, message }) => {
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
