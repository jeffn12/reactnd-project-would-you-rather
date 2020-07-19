import React from "react";
import ReactDOM from "react-dom";
// Redux resources
import { createStore } from "redux";
import reducers from "./reducers/index";
import middleware from "./middleware/index";
import { Provider } from "react-redux";
// Components
import App from "./components/App";

import "./index.css";

// Create the Redux Store:
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
