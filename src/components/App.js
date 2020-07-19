import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import NavBar from "./NavBar";
import PollList from "./PollList";
// Helpers
import { handleInitialData } from "../actions/shared";
import { ANSWERED, NOT_ANSWERED } from "./PollList";

export class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    return (
      <div>
        <NavBar />
        Would You Rather?
        <PollList filter={ANSWERED} />
      </div>
    );
  }
}

export default connect()(App);
