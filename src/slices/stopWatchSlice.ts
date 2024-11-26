import { createSlice } from "@reduxjs/toolkit";

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
        case "none": {
          state.running = "started";
          state.startTime = new Date().getTime();
          state.endTime = 0;
          break;
        }
        case "started": {
          state.running = "ended";
          state.endTime = new Date().getTime();
          break;
        }
        case "ended": {
          state.running = "none";
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
