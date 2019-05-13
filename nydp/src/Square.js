import React from 'react';


export default function Square(props) {
    const classname = "square" + (props.highlight ? " highlight" : "");
    return (
      <button className={classname} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }