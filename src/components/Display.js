import React from 'react';

const Display = (props) => {
    return(
        <div>
           <div>
               <h3 id='timer-label'>{props.timerType} {props.timerStatus}</h3>
           </div>
           <div></div>
        </div>
    )
}

export default Display;