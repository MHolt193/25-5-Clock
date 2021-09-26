import React from "react";
import classes from './LengthControls.module.css'
const LengthControls = (props) => {
  
  return (
    <div className='d-flex flex-row justify-content-center mt-2 gap-3'>
      <div className=''>
        <h2 id='break-label'className={classes.label}>Break Length</h2>
        <button onClick={props.breakIncrement} id='break-increment' className='btn btn-primary' aria-label='incrament break' tabIndex='0'>
          <i className="fas fa-arrow-alt-circle-up"></i>
        </button>
        <p id='break-length' className={classes.length}>{props.breakLength}</p>
        <button onClick={props.breakDecrement} id='break-decrement' className='btn btn-primary' aria-label='decrement break' tabIndex='0'>
          <i className="fas fa-arrow-alt-circle-down"></i>
        </button>
      </div>

      <div>
        <h2 id='session-label'className={classes.label}>Session Length</h2>
        <button onClick={props.sessionIncrement} id='session-increment' className='btn btn-primary' aria-label='incrament session'tabIndex='0'>
          <i className="fas fa-arrow-alt-circle-up"></i>
        </button>
        <p id='session-length' className={classes.length}>{props.sessionLength}</p>
        <button onClick={props.sessionDecrement} id='session-decrement' className='btn btn-primary' aria-label='decrement session' tabIndex='0'>
          <i className="fas fa-arrow-alt-circle-down"></i>
        </button>
      </div>
    </div>
  );
};

export default LengthControls;
