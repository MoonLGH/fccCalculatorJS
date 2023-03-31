import React, { useState } from 'react';
import './assets/css/main.css';
import Calculator from './components/Calculator';
import * as math from 'mathjs';

function App() {
  const [result, setResult] = useState('0');

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case 'clear':
        setResult('0');
        break;
      case 'equal':
        try {
          setResult(math.evaluate(result));
        } catch (e) {
          setResult('error');
        }
        break;
      default:
        setResult(result === '0' ? value : result + value);
        break;
    }
  }

  return (
    <div className="app">
      <Calculator result={result} handleClick={handleClick} />
    </div>
  );
}

export default App;
