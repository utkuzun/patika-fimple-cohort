import React from 'react'

import { useOptionsContext } from '../contexts/optionsContext'

const Options = () => {
  const { options } = useOptionsContext()

  console.log(options)

  return <h4>options form</h4>
}

export default Options
