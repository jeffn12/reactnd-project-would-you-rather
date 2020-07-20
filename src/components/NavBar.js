import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI Components
import { AppBar, Avatar, Box, Toolbar, Typography } from "@material-ui/core";

export class NavBar extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <AppBar position="static">
        <Toolbar className="nav-bar">
          <Box display="flex" width="100%">
            <Box display="flex" flexDirection="row" flexGrow={1}>
              <Typography variant="h6" className="nav-link">
                home
              </Typography>
              <Typography variant="h6" className="nav-link">
                leaderboard
              </Typography>
              <Typography variant="h6" className="nav-link">
                create a poll
              </Typography>
            </Box>
            <Box display="flex" justifyContent="end" flexShrink={1}>
              {authedUser && <Avatar src={authedUser.avatarURL} />}
              <Typography variant="h6" className="nav-link current-user">
                {authedUser ? `welcome, ${authedUser}!` : "login"}
              </Typography>
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
