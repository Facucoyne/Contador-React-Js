import { useState } from 'react'
import './App.css'

function App() { 
  
  const [count , setcount ] = useState(0)

  return (
    <>
    <h1>Contador React Js</h1>
    <h1>{count}</h1>
    <button id='aumentar' onClick={() => setcount((count) => count + 1)}>Aumentar</button>
    <button id='restar' onClick={() => setcount((count) => count - 1)}>Disminuir</button>
    
    <button id='resetear' onClick={() => setcount((count) => count = 0)}>Resetear</button>
    </>
  )
}

export default App
