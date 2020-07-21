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
    const { authedUser } = this.props;

    return (
      <Box>
        {!authedUser ? (
          <LoginPage />
        ) : (
          <React.Fragment>
            <NavBar />
            <Dashboard />
          </React.Fragment>
        )}
      </Box>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(App);
