import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import stopwatchReducer from "./slices/stopWatchSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    stopwatch: stopwatchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
