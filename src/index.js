import React from "react";
import ReactDOM from "react-dom";
// Redux resources
import { createStore } from "redux";
import reducers from "./reducers/index";
import middleware from "./middleware/index";
import { Provider } from "react-redux";
// Routing
import { BrowserRouter as Router } from "react-router-dom";
// Components
import App from "./components/App";

import "./index.css";

// Create the Redux Store:
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
