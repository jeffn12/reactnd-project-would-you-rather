import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI
import { Box, Typography } from "@material-ui/core";

export class Leaderboard extends Component {
  render() {
    const { users, userIds } = this.props;
    return (
      <Box>
        <Typography variant="h6">leaderboard</Typography>
        {userIds.map((id) => (
          <Typography key={id}>{users[id].name}</Typography>
        ))}
      </Box>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    userIds: Object.keys(users),
    users,
    authedUser
  };
};

export default connect(mapStateToProps)(Leaderboard);
