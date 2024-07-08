import React, { useState } from 'react';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('sum');

  const handleCalculation = async () => {
    let url;
    switch (operation) {
      case 'sum':
        url = 'http://localhost:3001/sum';
        break;
      case 'subtract':
        url = 'http://localhost:3002/subtract';
        break;
      case 'multiply':
        url = 'http://localhost:3003/multiply';
        break;
      default:
        return;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ a, b }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <label>
          A:
          <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          B:
          <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Operation:
          <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="sum">Sum</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
          </select>
        </label>
      </div>
      <button onClick={handleCalculation}>Calculate</button>
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
}

export default App;
