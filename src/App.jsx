import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const add = () => { 
    setCount(count + 1);
  }
  const substract = () => {
    let c = count > 0 ? count -1 : count; 
    setCount(c);
  }
  const reset = () => setCount(0);

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <div>
          <div>
            <button class="button" onClick={add}>+1</button>
            <button class="button" onClick={substract}>-1</button>
          </div>
          <div>
            <button class="button" aria-label="btn-reset" onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
