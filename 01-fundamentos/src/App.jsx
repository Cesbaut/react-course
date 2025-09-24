import { useState } from "react";

import "./App.css"

const App = () => {

  const state = useState(20)

  console.log(state)

  return (
  <div className="container">
    <h1>Counter : 0</h1>
    <button>+</button>
    <button>Reset</button>
    <button>-</button>
  </div>
  )
}

export default App;
