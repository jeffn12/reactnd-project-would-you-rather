import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import NavBar from "./NavBar";
import PollList from "./PollList";
// Material UI Components
import { Box, Button, ButtonGroup, Container } from "@material-ui/core";
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
      <Box style={{ justifyContent: "center" }}>
        <NavBar />
        <Container>
          <h2 style={{ textAlign: "center" }}>Choose Which Polls To See</h2>
          <ButtonGroup size="large" variant="text" fullWidth="true">
            <Button
              onClick={() => {
                this.setState(() => {
                  return { filter: ANSWERED };
                });
              }}
              color={filter === ANSWERED ? "secondary" : "default"}
            >
              answered
            </Button>
            <Button
              onClick={() => {
                this.setState(() => {
                  return { filter: ALL };
                });
              }}
              color={filter === ALL ? "secondary" : "default"}
            >
              all
            </Button>
            <Button
              onClick={() => {
                this.setState(() => {
                  return { filter: NOT_ANSWERED };
                });
              }}
              color={filter === NOT_ANSWERED ? "secondary" : "default"}
            >
              not answered
            </Button>
          </ButtonGroup>
          <h3 style={{ textAlign: "center" }}>Would You Rather?</h3>
          <PollList filter={filter} />
        </Container>
      </Box>
    );
  }
}

export default connect()(App);
