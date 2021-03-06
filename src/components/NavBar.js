import React, { Component } from "react";
import { connect } from "react-redux";
// Routing
import { NavLink } from "react-router-dom";
// Material UI Components
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core";
import { setAuthedUser } from "../actions/authedUser";

/**
 * NavBar Component
 * @description navigation header displayed when a user is logged in
 */
export class NavBar extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    const { authedUser, users } = this.props;

    const user = users[authedUser];
    return (
      <AppBar color="primary" position="static">
        <Toolbar style={{ padding: "0 12px" }}>
          <Box display="flex" width="100%">
            <Box
              display="flex"
              flexDirection="row"
              flexGrow={1}
              alignItems="center"
            >
              <Typography variant="body1" align="center">
                <NavLink to="/" exact>
                  home
                </NavLink>
              </Typography>
              {getDivider()}
              <Typography variant="body1" align="center">
                <NavLink to="/leaderboard">leaderboard</NavLink>
              </Typography>
              {getDivider()}
              <Typography variant="body1" align="center">
                <NavLink to="/add">create a poll</NavLink>
              </Typography>
            </Box>
            <Tooltip title="Click to Switch User">
              <Box
                display="flex"
                alignItems="center"
                flexShrink={1}
                onClick={this.handleLogout}
              >
                <Typography variant="body2" style={{ padding: ".5rem" }}>
                  {user.id}
                </Typography>
                <Avatar src={user.avatarURL} />
              </Box>
            </Tooltip>
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

// Set default properties for the NavLinks
NavLink.defaultProps = {
  style: { textDecoration: "none", color: "white" },
  activeStyle: {
    textDecoration: "underline",
    fontWeight: "bold"
  }
};

// Custom divider for in between NavLinks
const getDivider = () => {
  return (
    <Typography variant="h6" style={{ padding: "0 .5rem" }}>
      |
    </Typography>
  );
};
