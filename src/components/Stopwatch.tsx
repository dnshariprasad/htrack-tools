import { useState } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { ErrComponent } from "./ErrComponent";
import { LabledTextComponent } from "./LabledTextComponent";

function toLocaleDateString(time: number) {
  const date = new Date(time);
  const hours = String(date.getHours()).padStart(2, "0"); // 0-23
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 0-59
  const seconds = String(date.getSeconds()).padStart(2, "0"); // 0-59
  const formatedTime = `${hours}:${minutes}:${seconds}`;
  const formatedDate = new Date(time).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatedDate + " " + formatedTime;
}

function calculateTimeDifference(startTime: number, endTime: number): string {
  if (isNaN(startTime) || isNaN(endTime)) {
    return "Error: Invalid timestamp provided.";
  }

  if (endTime < startTime) {
    return "Error: Both timestamps are the same.";
  }

  const differenceInMs = Math.abs(startTime - endTime);

  const seconds = Math.floor(differenceInMs / 1000) % 60;
  const minutes = Math.floor(differenceInMs / (1000 * 60)) % 60;
  const hours = Math.floor(differenceInMs / (1000 * 60 * 60)) % 24;
  const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24)) % 365;
  const years = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365));
  const timeDifference = { years, days, hours, minutes, seconds };
  return Object.entries(timeDifference)
    .filter(([_, value]) => value > 0) // Keep only entries with value > 0
    .map(([key, value]) => `${value} ${key}`) // Format as "value key"
    .join(", "); // Join all;
}

export function Stopwatch() {
  const [error, setError] = useState<string>("");
  const [running, setRunning] = useState<string>("init");
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const handleError = () => {
    setError("");
  };

  const handleStopEndClick = () => {
    switch (running) {
      case "init": {
        setRunning("started");
        setStartTime(new Date().getTime());
        setEndTime(0);
        setError("");
        break;
      }
      case "started": {
        setRunning("ended");
        setEndTime(new Date().getTime());
        setError("");
        break;
      }
      case "ended": {
        setStartTime(0);
        setEndTime(0);
        setRunning("init");
        setError("");
        break;
      }
    }
  };
  let buttonLable = "Start";
  switch (running) {
    case "init": {
      buttonLable = "Start";
      break;
    }
    case "started": {
      buttonLable = "End";
      break;
    }
    case "ended": {
      buttonLable = "Reset";
      break;
    }
  }
  return (
    <>
     <div className="main-container">
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
          lable={buttonLable}
          onButtonClick={handleStopEndClick}
        />
        <ErrComponent info={error} onErrorClick={handleError} />
      </div>
    </>
  );
}
