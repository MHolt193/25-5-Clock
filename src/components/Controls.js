const Controls = (props) => {
  return (
    <div className="d-flex justify-content-center gap-5">
      <button
        aria-label="start stop button"
        className={
          props.timerStatus === "Stopped" || props.timerStatus === "Not Started"
            ? "btn btn-success"
            : "btn btn-danger"
        }
        tabIndex="0"
        id="start_stop"
        onClick={props.timerStatusHandler}
      >
        {props.timerStatus === "Stopped" ||
        props.timerStatus === "Not Started" ? (
          <i className="fs-2 fas fa-play"></i>
        ) : (
          <i className="fs-2 fas fa-pause"></i>
        )}
      </button>
      <button
        tabIndex="0"   
        id="reset"
        onClick={props.resetTimer}
        className="btn btn-warning"
        aria-label="Reset Button"
      >
        <i className=" fs-2 fas fa-sync-alt"></i>
      </button>
    </div>
  );
};

export default Controls;
