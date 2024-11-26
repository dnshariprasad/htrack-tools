import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import store from "./store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
