import React from 'react';
import Key from './Key';

const Keypad = (props) => {
  return (
    <div id="keypad">
      <div className="row">
        <Key id="clear" label="AC" onClick={props.clear} />
        <Key id="divide" label="/" onClick={props.operation} />
        <Key id="multiply" label="x" eq="*" onClick={props.operation} />
        <Key id="subtract" label="-" onClick={props.operation} />
      </div>
      <div className="row">
        <Key id="seven" label="7" onClick={props.number} />
        <Key id="eight" label="8" onClick={props.number} />
        <Key id="nine" label="9" onClick={props.number} />
        <Key id="add" label="+" onClick={props.operation} />
      </div>
      <div className="row">
        <Key id="four" label="4" onClick={props.number} />
        <Key id="five" label="5" onClick={props.number} />
        <Key id="six" label="6" onClick={props.number} />
        <Key id="equals" label="=" onClick={props.equals} />
      </div>
      <div className="row">
        <Key id="one" label="1" onClick={props.number} />
        <Key id="two" label="2" onClick={props.number} />
        <Key id="three" label="3" onClick={props.number} />
        <Key id="decimal" label="." onClick={props.decimal} />
      </div>
      <div className="row">
        <Key id="zero" label="0" onClick={props.number} />
      </div>
    </div>
  );
};

export default Keypad;
