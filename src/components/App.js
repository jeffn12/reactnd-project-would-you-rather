import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
// Material UI Components
import { Box } from "@material-ui/core";
// Helpers
import { handleInitialData } from "../actions/shared";

export class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    return (
      <Box>
        <LoginPage />
        <NavBar />
        <Dashboard />
      </Box>
    );
  }
}

export default connect()(App);
