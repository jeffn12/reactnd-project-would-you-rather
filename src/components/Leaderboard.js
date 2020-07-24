import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { LeaderBoardEntry } from "./LeaderBoardEntry";
// Material UI
import { Box, Typography } from "@material-ui/core";

export class Leaderboard extends Component {
  render() {
    const { users, userIds, totalQuestions } = this.props;

    return (
      <Box width={1} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6">leaderboard</Typography>
        {userIds.map((id, index) => (
          <LeaderBoardEntry
            key={id}
            place={index + 1}
            user={users[id]}
            totals={{ totalQuestions }}
          />
        ))}
      </Box>
    );
  }
}

const mapStateToProps = ({ users, polls }) => {
  return {
    userIds: Object.keys(users).sort(
      (a, b) =>
        users[b].questions.length +
        Object.keys(users[b].answers).length -
        (users[a].questions.length + Object.keys(users[a].answers).length)
    ),
    users,
    totalQuestions: Object.keys(polls).length
  };
};

export default connect(mapStateToProps)(Leaderboard);
