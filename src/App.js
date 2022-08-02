import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const increment = () => {
    console.log('incremented');
    setState({ count: count + 1 });
    console.log(state);
  };

  const decrement = () => {
    console.log('decremented');
    setState({ count: count - 1 });
    console.log(state);
  };

  return (
    <>
      <div className='App'>
        <button disabled={count < 0} className='counter' onClick={increment}>
          +
        </button>
        <button disabled={count <= 0} className='counter' onClick={decrement}>
          -
        </button>
        <h2>{state.count}</h2>
      </div>
    </>
  );
}

export default App;
