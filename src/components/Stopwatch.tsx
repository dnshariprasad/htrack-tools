import { useState } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { ErrComponent } from "./ErrComponent";
import { LabledTextComponent } from "./LabledTextComponent";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { handleStopwatch } from "../slices/stopWatchSlice";
import { toLocaleDateString, calculateTimeDifference } from "../TimeUtils";
import { ENDED, NONE, STARTED } from "../StopWatchActions";

export function Stopwatch() {
  const { running, startTime, endTime } = useSelector(
    (state: RootState) => state.stopwatch
  );
  const dispatch: AppDispatch = useDispatch();

  const [error, setError] = useState<string>("");
  const handleError = () => {
    setError("");
  };

  const handleStopEndClick = () => {
    dispatch(handleStopwatch());
  };

  const handleButtonTitle = (stopwatchIsRunning: string) => {
    switch (stopwatchIsRunning) {
      case NONE: {
        return "Start";
      }
      case STARTED: {
        return "End";
      }
      case ENDED: {
        return "Reset";
      }
    }
    return "";
  };

  return (
    <>
      <div className="stopwatch-container">
        <h3>The Time Taken</h3>
        {startTime > 0 && (
          <LabledTextComponent
            lable="Start Time"
            value={toLocaleDateString(startTime)}
          />
        )}
        {endTime > 0 && (
          <LabledTextComponent
            lable="End Time"
            value={toLocaleDateString(startTime)}
          />
        )}
        {endTime > startTime && (
          <h3>{calculateTimeDifference(startTime, endTime)}</h3>
        )}
        <ButtonComponent
          buttonClass="right-button"
          lable={handleButtonTitle(running)}
          onButtonClick={handleStopEndClick}
        />
        <ErrComponent info={error} onErrorClick={handleError} />
      </div>
    </>
  );
}
