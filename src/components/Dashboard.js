import React, { Component } from "react";
// Components
import PollList from "./PollList";
// Material UI
import {
  Paper,
  Tooltip,
  Button,
  ButtonGroup,
  Typography
} from "@material-ui/core";
// Helpers
import { ANSWERED, NOT_ANSWERED, ALL } from "./PollList";

export class Dashboard extends Component {
  state = {
    filter: ALL
  };

  render() {
    const { filter } = this.state;
    return (
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
        <Typography align="center" variant="h5">
          Would You Rather?
        </Typography>
        <PollList filter={filter} />
      </Paper>
    );
  }
}

export default Dashboard;
