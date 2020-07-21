import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI
import {
  CardContent,
  Typography,
  LinearProgress,
  Box
} from "@material-ui/core";

export class AnsweredPollStats extends Component {
  render() {
    const { id, poll, currentUser } = this.props;

    const oneVotes = { raw: poll.optionOne.votes.length };
    const twoVotes = { raw: poll.optionTwo.votes.length };
    const total = oneVotes.raw + twoVotes.raw;
    oneVotes.percent = (oneVotes.raw / total) * 100;
    twoVotes.percent = (twoVotes.raw / total) * 100;

    return (
      <CardContent>
        {console.log(oneVotes)}
        <Typography
          variant={currentUser.answers[id] === "optionOne" ? "body1" : "body2"}
        >{`${poll.optionOne.text}:`}</Typography>
        {LinearProgressWithLabel(oneVotes.percent)}
        <Typography
          variant={currentUser.answers[id] === "optionTwo" ? "body1" : "body2"}
        >{`${poll.optionTwo.text}:`}</Typography>
        {LinearProgressWithLabel(twoVotes.percent)}
      </CardContent>
    );
  }
}

const mapStateToProps = ({ polls, users, authedUser }, props) => {
  return {
    id: props.id,
    currentUser: users[authedUser],
    poll: polls[props.id]
  };
};

export default connect(mapStateToProps)(AnsweredPollStats);

const LinearProgressWithLabel = (value) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {Math.round(value)}%
        </Typography>
      </Box>
    </Box>
  );
};
