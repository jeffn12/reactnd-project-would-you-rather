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

export class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    const { authedUser, loading } = this.props;

    return (
      <Box>
        <LoadingBar
          style={{
            backgroundColor: "red"
          }}
        />
        <Route path="/add-user" component={AddUser} />
        {loading === 0 ? (
          !authedUser ? (
            <>
              <LoginPage />
            </>
          ) : (
            <React.Fragment>
              <NavBar />
              <Route exact path="/" component={Dashboard} />
              <Route path="/add" component={AddPoll} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/questions/:id" component={Poll} />
            </React.Fragment>
          )
        ) : (
          <></>
        )}
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
