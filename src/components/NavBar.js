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
              <Typography variant="h6" style={{ padding: "5px" }}>
                home
              </Typography>
              <Typography variant="h6" style={{ padding: "5px" }}>
                leaderboard
              </Typography>
              <Typography variant="h6" style={{ padding: "5px" }}>
                create a poll
              </Typography>
            </Box>
            <Box display="flex" justifyContent="end" flexShrink={1}>
              <Typography variant="h6" style={{ padding: "5px" }}>
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
