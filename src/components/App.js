import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import NavBar from "./NavBar";
import PollList from "./PollList";
import LoginPage from "./LoginPage";
// Material UI Components
import { Box, Button, ButtonGroup, Paper, Tooltip } from "@material-ui/core";
// Helpers
import { handleInitialData } from "../actions/shared";
import { ANSWERED, NOT_ANSWERED, ALL } from "./PollList";

export class App extends Component {
  state = {
    filter: NOT_ANSWERED
  };

  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    const { filter } = this.state;
    const { authedUser } = this.props;

    return (
      <Box>
        {authedUser ? (
          <React.Fragment>
            <NavBar />
            <Paper elevation={0} style={{ marginTop: "15px" }}>
              <Tooltip
                placement="right-start"
                title="Choose your polls"
                open={true}
                arrow
              >
                <ButtonGroup size="large" variant="text" fullWidth={true}>
                  <Button
                    onClick={() => {
                      this.setState(() => {
                        return { filter: ANSWERED };
                      });
                    }}
                    variant={filter === ANSWERED ? "contained" : "text"}
                    disabled={filter === ANSWERED}
                  >
                    answered
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState(() => {
                        return { filter: ALL };
                      });
                    }}
                    variant={filter === ALL ? "contained" : "text"}
                    disabled={filter === ALL}
                  >
                    all
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState(() => {
                        return { filter: NOT_ANSWERED };
                      });
                    }}
                    variant={filter === NOT_ANSWERED ? "contained" : "text"}
                    disabled={filter === NOT_ANSWERED}
                  >
                    not answered
                  </Button>
                </ButtonGroup>
              </Tooltip>
              <h3 style={{ textAlign: "center" }}>Would You Rather?</h3>
              <PollList filter={filter} />
            </Paper>
          </React.Fragment>
        ) : (
          <LoginPage />
        )}
      </Box>
    );
  }
}

export default connect()(App);
