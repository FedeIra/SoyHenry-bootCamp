import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./components/App";
import AppClass from "./components/AppClass"; */
import AppHooks from "./components/AppHooks";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <AppHooks />
  </Provider>,
  document.getElementById("root")
);
