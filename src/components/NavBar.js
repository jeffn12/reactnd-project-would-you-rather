import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI Components
import { AppBar, Avatar, Box, Toolbar, Typography } from "@material-ui/core";

export class NavBar extends Component {
  getDivider = () => {
    return (
      <Typography variant="h6" style={{ padding: "0 .5rem" }}>
        |
      </Typography>
    );
  };

  render() {
    const { authedUser, users } = this.props;
    if (!authedUser) return <></>;
    const user = users[authedUser];
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <Box display="flex" width="100%">
            <Box
              display="flex"
              flexDirection="row"
              flexGrow={1}
              alignItems="center"
            >
              <Typography variant="body1">home</Typography>
              {this.getDivider()}

              <Typography variant="body1">leaderboard</Typography>
              {this.getDivider()}
              <Typography variant="body1">create a poll</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="end"
              alignItems="center"
              flexShrink={1}
            >
              <Typography variant="body2" style={{ padding: ".25rem" }}>
                welcome, {user.id}!
              </Typography>
              <Avatar src={user.avatarURL} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  };
};

export default connect(mapStateToProps)(NavBar);
