import React, { Component } from "react";
import { connect } from "react-redux";
// Routing
import { Route } from "react-router-dom";
// Components
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
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
            <Route exact path="/" component={Dashboard} />
            <Route path="/leaderboard" component={Leaderboard} />
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
