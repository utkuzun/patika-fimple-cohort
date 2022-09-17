import { useState } from 'react'

import Options from './components/Options'
import Payments from './components/Payments'
import Info from './components/Info'
import Summary from './components/Summary'

function App() {
  const [slider, setSlider] = useState('bilesik')

  const toggleSlider = () => {
    const newSlider = slider === 'basit' ? 'bileşik' : 'basit'
    setSlider(newSlider)
  }
  return (
    <main>
      <Info />
      <Options />
      <Summary slider={slider} />
      <Payments slider={slider} toggleSlider={toggleSlider} />
    </main>
  )
}

export default App
