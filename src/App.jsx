import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("value added", counter);
    setCounter(counter + 1);
  }

  const decreaseValue = () => {
    console.log("value added", counter);
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Bikash Joshi</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button> <br /><br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;
