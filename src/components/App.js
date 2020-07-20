import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import NavBar from "./NavBar";
import PollList from "./PollList";
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
    return (
      <Box>
        <NavBar />
        <Paper elevation={0} style={{ marginTop: "15px" }}>
          <Tooltip
            placement="right-start"
            title="Choose your polls"
            open="true"
            arrow
          >
            <ButtonGroup size="large" variant="text" fullWidth="true">
              <Button
                onClick={() => {
                  this.setState(() => {
                    return { filter: ANSWERED };
                  });
                }}
                color={filter === ANSWERED ? "primary" : "default"}
              >
                answered
              </Button>
              <Button
                onClick={() => {
                  this.setState(() => {
                    return { filter: ALL };
                  });
                }}
                color={filter === ALL ? "primary" : "default"}
              >
                all
              </Button>
              <Button
                onClick={() => {
                  this.setState(() => {
                    return { filter: NOT_ANSWERED };
                  });
                }}
                color={filter === NOT_ANSWERED ? "primary" : "default"}
              >
                not answered
              </Button>
            </ButtonGroup>
          </Tooltip>
          <h3 style={{ textAlign: "center" }}>Would You Rather?</h3>
          <PollList filter={filter} />
        </Paper>
      </Box>
    );
  }
}

export default connect()(App);
