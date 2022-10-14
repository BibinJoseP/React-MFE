import React, { useState } from "react";
import './Counter.css';
export const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);
    return (
      <div className="counter">
        <h3>home</h3>
        <p>Current count: <strong>{count}</strong></p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
}