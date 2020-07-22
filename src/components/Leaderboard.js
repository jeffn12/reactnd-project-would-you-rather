import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { LeaderBoardEntry } from "./LeaderBoardEntry";
// Material UI
import { Box, Typography } from "@material-ui/core";

export class Leaderboard extends Component {
  render() {
    const { users, userIds, totalQuestions, totalAnswers } = this.props;

    return (
      <Box>
        <Typography variant="h6">leaderboard</Typography>
        {userIds.map((id) => (
          <LeaderBoardEntry
            key={id}
            user={users[id]}
            totals={{ totalQuestions, totalAnswers }}
          />
        ))}
      </Box>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    userIds: Object.keys(users),
    users,
    totalQuestions: Object.keys(users).reduce(
      (acc, id) => acc + users[id].questions.length,
      0
    ),
    totalAnswers: Object.keys(users).reduce(
      (acc, id) => acc + Object.keys(users[id].answers).length,
      0
    )
  };
};

export default connect(mapStateToProps)(Leaderboard);
