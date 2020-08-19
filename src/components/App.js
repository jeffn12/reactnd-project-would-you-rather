import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import AddPoll from "./AddPoll";
import Poll from "./Poll";
import LoadingBar from "react-redux-loading-bar";
import AddUser from "./AddUser";
// Routing
import { Route } from "react-router-dom";
// Material UI
import { Box } from "@material-ui/core";
// Actions
import { handleInitialData } from "../actions/shared";

/**
 * App Component
 * @description main component of the Would You Rather? game.
 *  - gets initial data on mount
 *  - defines route
 *  - tracks authed user for displaying correctly
 */
export class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    const { authedUser } = this.props;

    return (
      <Box>
        <Box
          style={{
            position: "relative",
            top: 0,
            left: 0
          }}
        >
          <LoadingBar
            style={{
              backgroundColor: "red",
              height: "5px",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0
            }}
            showFastActions
          />
        </Box>
        {
          /* loading === 0 && */ // Render the app when the data is done loading
          !authedUser ? ( // If there is no authed user, show the login page
            <>
              <Route path="/" component={LoginPage} />
              <Route path="/add-user" component={AddUser} />
            </>
          ) : (
            // If there is an authed user, render the game
            <>
              <NavBar />
              <Route exact path="/" component={Dashboard} />
              <Route path="/add" component={AddPoll} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/questions/:id" component={Poll} />
            </>
          )
        }
      </Box>
    );
  }
}

const mapStateToProps = ({ authedUser, loadingBar }) => {
  return {
    authedUser,
    loading: loadingBar.default
  };
};

export default connect(mapStateToProps)(App);
