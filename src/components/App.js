import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import NavBar from "./NavBar";
import Poll from "./Poll";
import PollList from "./PollList";
// Helpers
import { handleInitialData } from "../actions/shared";

export class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    return (
      <div>
        <NavBar />
        Would You Rather?
        <PollList />
        <Poll />
      </div>
    );
  }
}

export default connect()(App);
