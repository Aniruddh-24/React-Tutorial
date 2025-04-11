import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter, setCounter] = useState(15)

const addValue = () => {
  setCounter(counter + 1)
}

const removeVlaue = () => {
  setCounter(counter - 1)
}

  return (
    <>
     <h1>React tutorial..{counter}</h1>
     <h2>Counter Vlaue: {counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>{" "}
     <button
     onClick={removeVlaue}
     > remove Vlaue</button>
     <p>footer: </p>
    </>
  )
}

export default App
