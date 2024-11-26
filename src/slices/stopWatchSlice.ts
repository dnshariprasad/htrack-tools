import { createSlice } from "@reduxjs/toolkit";
import { ENDED, NONE, STARTED } from "../StopWatchActions";

interface StopwatchState {
  running: string;
  startTime: number;
  endTime: number;
}

const initialState: StopwatchState = {
  running: "none",
  startTime: 0,
  endTime: 0,
};

const counterSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    handleStopwatch: (state) => {
      switch (state.running) {
        case NONE: {
          state.running = STARTED;
          state.startTime = new Date().getTime();
          state.endTime = 0;
          break;
        }
        case STARTED: {
          state.running = ENDED;
          state.endTime = new Date().getTime();
          break;
        }
        case ENDED: {
          state.running = NONE;
          state.startTime = 0;
          state.endTime = 0;
          break;
        }
      }
    },
  },
});

export const { handleStopwatch } = counterSlice.actions;
export default counterSlice.reducer;
