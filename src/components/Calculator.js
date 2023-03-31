import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import {evaluate} from 'mathjs';

const Calculator = () => {
  const [equation, setEquation] = useState('0');

  
  const clear = () => {
    setEquation('');
  };

  const number = (event) => {
    const value = event.target.getAttribute('data-eq');
    console.log(value)

    if(equation !== "0"){
      setEquation((prevEquation) => prevEquation + value);
    } else {
      setEquation(value);
    }
  };

  const operation = (event) => {
    const value = event.target.getAttribute('data-eq');
    setEquation((prevEquation) => prevEquation + value);
  };

  const equals = () => {
    try {
      const result = evaluate(equation);
      console.log(result)
      setEquation(result);
    } catch (error) {
      console.log(error);
    }
  };

  const decimal = (event) => {
    const value = event.target.getAttribute('data-eq');
    setEquation((prevEquation) => prevEquation + value);
  };

  return (
    <div id="calculator">
      <Display value={equation} />
      <Keypad
        clear={clear}
        number={number}
        operation={operation}
        equals={equals}
        decimal={decimal}
      />
    </div>
  );
};

export default Calculator;
