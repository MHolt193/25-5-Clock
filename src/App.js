import React, { useState, useRef, useEffect } from "react";
import LengthControls from "./components/LengthControls";
import Controls from "./components/Controls";
import Display from "./components/Display";
import "./App.css";

const App = (props) => {
  /*TIMER STATES */
  const [timerStatus, setTimerStatus] = useState("Not Started");
  const [timerType, setTimerType] = useState("Session");
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(1500);
  const interval = useRef(null);
  let audio = document.getElementById("beep");

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
      if (timerType === "Session") {
        setTimer((sessionLength + 1) * 60);
        setSessionLength((sessionLength) => sessionLength + 1);
      } else setSessionLength((sessionLength) => sessionLength + 1);
    }
    return;
  };
  const sessionDecrement = () => {
    if (sessionLength > 1) {
      if (timerType === "Session") {
        setTimer((sessionLength - 1) * 60);
        setSessionLength((sessionLength) => sessionLength - 1);
      } else setSessionLength((sessionLength) => sessionLength - 1);
    }
    return;
  };
  const resetTimer = () => {
    clearInterval(interval.current);
    setTimerStatus("Not Started");
    setTimerType("Session");
    setBreakLength(5);
    setSessionLength(25);
    setTimer(1500);
    audio.pause();
    audio.currentTime = 0;
  };

  /*TIMER LOGIC*/

  const timerDecrement = () => {
    if (timerType === "Session" && timer > 0) {
      setTimer((timer) => timer - 1);
    }
    if (timerType === "Break" && timer > 0) {
      setTimer((timer) => timer - 1);
    }
  };
  useEffect(() => {
    if (timerType === "Session" && timer <= 0) {
      audio.play();
      setTimerType("Break");
      setTimer(breakLength * 60);
    }
    if (timerType === "Break" && timer === 0) {
      audio.play();
      setTimerType("Session");
      setTimer(sessionLength * 60);
    }
  }, [timer, timerType, breakLength, sessionLength, audio]);

  return (
    <div className="App">
      <h1 className="title">25+5 Clock</h1>

      <Display timerType={timerType} timerStatus={timerStatus} timer={timer} />
      <Controls
        timerStatus={timerStatus}
        timerStatusHandler={timerStatusHandler}
        resetTimer={resetTimer}
      />
      <LengthControls
        breakLength={breakLength}
        breakIncrement={breakIncrement}
        breakDecrement={breakDecrement}
        sessionLength={sessionLength}
        sessionIncrement={sessionIncrement}
        sessionDecrement={sessionDecrement}
      />

      <audio
        src="https://orangefreesounds.com/wp-content/uploads/2021/02/Alarm-clock-bell-ringing-sound-effect.mp3?_=1"
        id="beep"
      />
    </div>
  );
};

export default App;
