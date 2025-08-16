import React, { useState } from "react";
import './App.css';

export default function CounterApp() {
  // States
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(0);
  const [allowNegative, setAllowNegative] = useState(false);

  // Adjust min limit if negative values not allowed
  React.useEffect(() => {
    if (!allowNegative && min < 0) {
      setMin(0);
      if (count < 0) setCount(0);
    }
  }, [allowNegative]);

  const increment = () => {
    setCount(prev => Math.min(prev + step, max));
  };

  const decrement = () => {
    setCount(prev => Math.max(prev - step, min));
  };

  const reset = () => {
    setCount(0);
  };

  // Styles
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    maxWidth: "350px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    border: "2px solid #ddd",
    borderRadius: "12px",
    background: "#f0efeb",
  };
  const buttonStyle = {
    padding: "8px 12px",
    margin: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };
  const inputStyle = {
    padding: "5px",
    margin: "5px",
    width: "60px",
  };

  return (
    <div style={containerStyle}>
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <div>
        <button
          style={buttonStyle}
          onClick={decrement}
          disabled={count <= min}
        >
          -
        </button>
        <button
          style={buttonStyle}
          onClick={increment}
          disabled={count >= max}
        >
          +
        </button>
        <button style={buttonStyle} onClick={reset}>
          Reset
        </button>
      </div>

      <div>
        <label>
          Step:
          <input
            type="number"
            style={inputStyle}
            value={step}
            onChange={(e) => setStep(Number(e.target.value) || 1)}
          />
        </label>
      </div>

      <div>
        <label>
          Max:
          <input
            type="number"
            style={inputStyle}
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </label>
        <label>
          Min:
          <input
            type="number"
            style={inputStyle}
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            disabled={!allowNegative}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={allowNegative}
            onChange={(e) => setAllowNegative(e.target.checked)}
          />
          Allow Negative Numbers
        </label>
      </div>
    </div>
  );
}
