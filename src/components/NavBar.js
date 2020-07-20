import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI Components
import { AppBar, Avatar, Box, Toolbar, Typography } from "@material-ui/core";

export class NavBar extends Component {
  getDivider = () => {
    return (
      <Typography variant="h6" style={{ padding: "5px" }}>
        |
      </Typography>
    );
  };

  render() {
    const { authedUser } = this.props;

    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <Box display="flex" width="100%">
            <Box display="flex" flexDirection="row" flexGrow={1}>
              <Typography variant="h6" style={{ padding: "5px" }}>
                home
              </Typography>
              {this.getDivider()}
              <Typography variant="h6" style={{ padding: "5px" }}>
                leaderboard
              </Typography>
              {this.getDivider()}
              <Typography variant="h6" style={{ padding: "5px" }}>
                create a poll
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="end"
              alignItems="center"
              flexShrink={1}
            >
              <Typography variant="p" style={{ padding: "5px" }}>
                {authedUser ? `welcome, ${authedUser.id}!` : "login"}
              </Typography>
              {authedUser && <Avatar src={authedUser.avatarURL} />}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(NavBar);
