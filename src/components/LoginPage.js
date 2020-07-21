import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import UserSelector from "./UserSelector";
// Material UI
import { Box, Typography } from "@material-ui/core";

export class LoginPage extends Component {
  render() {
    return (
      <Box>
        <Typography>Choose Your Username:</Typography>
        <UserSelector />
      </Box>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(LoginPage);
