import React from 'react';

const Key = (props) => {
  return (
    <button id={props.id} onClick={props.onClick} data-eq={props.eq ? props.eq : props.label}>
      {props.label}
    </button>
  );
};

export default Key;
