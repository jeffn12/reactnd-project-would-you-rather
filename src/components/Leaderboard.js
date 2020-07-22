import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { LeaderBoardEntry } from "./LeaderBoardEntry";
// Material UI
import { Box, Typography } from "@material-ui/core";

export class Leaderboard extends Component {
  render() {
    const { users, userIds } = this.props;
    return (
      <Box>
        <Typography variant="h6">leaderboard</Typography>
        {userIds.map((id) => (
          <LeaderBoardEntry key={id} user={users[id]} />
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
