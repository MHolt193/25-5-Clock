import React from 'react';
import classes from './Display.module.css'

const Display = (props) => {
  const  displayClock =() =>{
            let minutes = Math.floor(props.timer / 60);
            let seconds = props.timer - (minutes * 60);
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            return `${minutes}:${seconds}`
    }

    return(
        <div >
           <div>
               <h3 id='timer-label'className={classes.label}>{props.timerType} {props.timerStatus}</h3>
           </div>
           <div id='time-left' className={classes.display}>{displayClock()}</div>
        </div>
    )
}

export default Display;