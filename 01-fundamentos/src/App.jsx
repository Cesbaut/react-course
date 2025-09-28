import { useState } from "react";

import "./App.css"

const App = () => {

  //const state = useState(20)
  const [count, setCount] = useState(10)

  // setTimeout(() => {
  //   setCount(count + 1)
  // }, 1000);

  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleSubtract = () => {
    setCount(count - 1)
  }
  const handleReset = () => {
    setCount(10)
  }
  //Fragment <> </>
  return (
  <div className="container">
    <h1>Counter : { count }</h1>
    <button onClick={handleAdd}>+</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleSubtract}>-</button>
  </div>
  )
}

export default App;
