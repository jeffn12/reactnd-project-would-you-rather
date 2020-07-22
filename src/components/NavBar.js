import React, { Component } from "react";
import { connect } from "react-redux";
// Routing
import { NavLink } from "react-router-dom";
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
              <Typography variant="body1">
                <NavLink to="/" exact>
                  home
                </NavLink>
              </Typography>
              {this.getDivider()}
              <Typography variant="body1">
                <NavLink to="/leaderboard">leaderboard</NavLink>
              </Typography>
              {this.getDivider()}
              <Typography variant="body1">
                <NavLink to={() => <h1>in progress...</h1>}>
                  create a poll
                </NavLink>
              </Typography>
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

NavLink.defaultProps = {
  style: { textDecoration: "none", color: "white" },
  activeStyle: {
    textDecoration: "underline",
    fontWeight: "bold"
  }
};
