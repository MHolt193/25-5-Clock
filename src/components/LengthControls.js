import React from "react";

const LengthControls = (props) => {
  
  return (
    <React.Fragment>
      <div>
        <h2 id='break-label'>Break Length</h2>
        <button onClick={props.breakIncrement} id='break-increment'>
          <i className="fas fa-arrow-alt-circle-up"></i>
        </button>
        <p id='break-length'>{props.breakLength}</p>
        <button onClick={props.breakDecrement} id='break-decrement'>
          <i className="fas fa-arrow-alt-circle-down"></i>
        </button>
      </div>

      <div>
        <h2 id='session-label'>Session Length</h2>
        <button onClick={props.sessionIncrement} id='session-increment'>
          <i className="fas fa-arrow-alt-circle-up"></i>
        </button>
        <p id='session-length'>{props.sessionLength}</p>
        <button onClick={props.sessionDecrement} id='session-decrement'>
          <i className="fas fa-arrow-alt-circle-down"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default LengthControls;
