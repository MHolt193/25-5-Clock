import React, { useState } from "react";
import LengthControls from "./components/LengthControls";
import Controls from "./components/Controls";
import Display from "./components/Display";
import "./App.css";

const App = (props) => {
  /*TIMER STATUS */
  const [timerStatus, setTimerStatus] = useState("Not Started");

  const timerStatusHandler = () => {
    if (timerStatus === "Stopped" || timerStatus === "Not Started") {
      setTimerStatus("Running");
    } else setTimerStatus("Stopped");
  };

  /*TIMER  LENGTH*/
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const breakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
    return;
  };
  const breakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
    return;
  };

  const sessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
    return;
  };
  const sessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
    return;
  };
  const resetTimer = () => {
    setTimerStatus("Not Started");
    setBreakLength(5);
    setSessionLength(25);
  };
  /*TIMER LOGIC*/

  return (
    <div className="App">
      <h1>Study-Timer</h1>
      <LengthControls
        breakLength={breakLength}
        breakIncrement={breakIncrement}
        breakDecrement={breakDecrement}
        sessionLength={sessionLength}
        sessionIncrement={sessionIncrement}
        sessionDecrement={sessionDecrement}
      />
      <Display timerType="Session" timerStatus={timerStatus} />
      <Controls
        timerStatus={timerStatus}
        timerStatusHandler={timerStatusHandler}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default App;
