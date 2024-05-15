import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  console.log('test', count, calculation);
  console.log(1);
  useEffect(() => {
    setCalculation(() => count * 2);
    console.log(2, count, calculation);
  }, [count]); // <- add the count variable here
  console.log(3, calculation);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
};
