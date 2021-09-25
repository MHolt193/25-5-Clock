import React, { useState, useRef } from "react";
import LengthControls from "./components/LengthControls";
import Controls from "./components/Controls";
import Display from "./components/Display";
import "./App.css";

const App = (props) => {
  /*TIMER STATUS */
  const [timerStatus, setTimerStatus] = useState("Not Started");
  const [timerType, setTimerType] = useState("Session");
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const interval = useRef(null);
  const [timer, setTimer] = useState(1500);

  const timerStatusHandler = () => {
    if (timerStatus === "Running") {
      setTimerStatus("Stopped");
      clearInterval(interval.current);
    } else {
      setTimerStatus("Running");
      interval.current = setInterval(timerDecrement, 1000);
    }
  };

  /*TIMER  LENGTH*/

  const breakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength((breakLength) => breakLength + 1);
    }
    return;
  };
  const breakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength((breakLength) => breakLength - 1);
    }
    return;
  };

  const sessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength((sessionLength) => sessionLength + 1);
    }
    return;
  };
  const sessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength((sessionLength) => sessionLength - 1);
    }
    return;
  };
  const resetTimer = () => {
    setTimerStatus("Not Started");
    setTimerType('Session');
    setBreakLength(5);
    setSessionLength(25);
    clearInterval(interval.current)
    setTimer(1500);
  };
  /*TIMER LOGIC*/

  const timerDecrement = () => {
    if (timerType === "Session") {
      setTimer((timer) => timer - 1);
      if (timer === 0) {
        setTimerType("Break");
        setTimer(breakLength * 60);
      }
    }
    if (timerType === "Break") {
      setTimer((timer) => timer - 1);
      if(timer === 0) {
        clearInterval(interval.current)
      }
    }
  };

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
      <Display timerType="Session" timerStatus={timerStatus} timer={timer} />
      <Controls
        timerStatus={timerStatus}
        timerStatusHandler={timerStatusHandler}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default App;
