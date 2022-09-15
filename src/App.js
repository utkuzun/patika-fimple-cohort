import Options from './components/Options'
import Payments from './components/Payments'
import Info from './components/Info'
import { useState } from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

function App() {
  const [info, setInfo] = useState('')

  return (
    <main>
      <Info info={info} />
      <Options setInfo={setInfo} />
      <Payments />
    </main>
  )
}

export default App
