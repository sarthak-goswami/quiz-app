import { useState } from 'react'
import Title from './components/Title'
import Startbtn from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title/>
      <Startbtn/>
    </>
  )
}

export default App
