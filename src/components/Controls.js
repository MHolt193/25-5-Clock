const Controls = (props) => {
  return (
    <div>
      <button id='start_stop' onClick={props.timerStatusHandler}>
        {props.timerStatus === "Stopped" || props.timerStatus === "Not Started" ? (
          <i className="fas fa-play"></i>
        ) : (
          <i className="fas fa-pause"></i>
        )}
      </button>
      <button id='reset' onClick={props.resetTimer}><i className="fas fa-sync-alt"></i></button>
    </div>
  );
};

export default Controls;
