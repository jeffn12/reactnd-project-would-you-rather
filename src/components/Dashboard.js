import React, { Component } from "react";
// Components
import PollList from "./PollList";
// Material UI
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardMedia
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
// Constants
import { ANSWERED, NOT_ANSWERED, ALL } from "./PollList";

/**
 * Dashboard Component to hold the buttons and the poll list
 * The dashboard is shown by the home (App) view.
 * A user must be logged in to see the dashboard
 */
export class Dashboard extends Component {
  state = {
    filter: NOT_ANSWERED
  };

  render() {
    const { filter } = this.state;
    return (
      <Box
        m={"0.75rem"}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box width={1}>
          <Card>
            <StyledCardMedia
              image="/would_you_rather_logo.jpg"
              alt="logo with the text would you rather?"
              height="140px"
            />
            <CardHeader subheader="which questions would you like to see?" />
            <ButtonGroup size="large" variant="text" fullWidth={true}>
              <Button
                onClick={() => {
                  this.setState(() => {
                    return { filter: ANSWERED };
                  });
                }}
                variant={filter === ANSWERED ? "contained" : "text"}
                disabled={filter === ANSWERED}
                children="answered"
              />
              <Button
                onClick={() => {
                  this.setState(() => {
                    return { filter: ALL };
                  });
                }}
                variant={filter === ALL ? "contained" : "text"}
                disabled={filter === ALL}
                children="all"
              />
              <Button
                onClick={() => {
                  this.setState(() => {
                    return { filter: NOT_ANSWERED };
                  });
                }}
                variant={filter === NOT_ANSWERED ? "contained" : "text"}
                disabled={filter === NOT_ANSWERED}
                children="not answered"
              />
            </ButtonGroup>
            <PollList filter={filter} />
          </Card>
        </Box>
      </Box>
    );
  }
}

export default Dashboard;

const StyledCardMedia = withStyles({
  root: { minHeight: "200px", width: "50%", margin: "0 auto" }
})(CardMedia);
