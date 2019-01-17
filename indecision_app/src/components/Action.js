import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
      </button>
  </div>
);

export default Action;



function average (numbers){
  return numbers.reduce(
    function(previous, current){return previous+current}
  )/numbers.length;
}