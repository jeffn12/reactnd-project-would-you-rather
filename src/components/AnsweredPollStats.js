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

    const answer = currentUser.answers[id];
    const oneVotes = { raw: poll.optionOne.votes.length };
    const twoVotes = { raw: poll.optionTwo.votes.length };
    const total = oneVotes.raw + twoVotes.raw;
    oneVotes.percent = (oneVotes.raw / total) * 100;
    twoVotes.percent = (twoVotes.raw / total) * 100;

    return (
      <CardContent>
        <Box>
          <Box
            p="0.5rem"
            border={answer === "optionOne" ? 2 : 0}
            borderColor="primary.main"
            borderRadius="10px"
          >
            <Typography
              variant={answer === "optionOne" ? "h6" : "body2"}
              color={answer === "optionOne" ? "primary" : "initial"}
            >{`${poll.optionOne.text}:`}</Typography>
            {LinearProgressWithLabel(
              oneVotes,
              answer === "optionOne" ? "primary" : "secondary",
              oneVotes
            )}
          </Box>
          <Box
            p="0.5rem"
            border={answer === "optionTwo" ? 2 : 0}
            borderColor="primary.main"
            borderRadius="10px"
          >
            <Typography
              variant={answer === "optionTwo" ? "h6" : "body2"}
              color={answer === "optionTwo" ? "primary" : "initial"}
            >{`${poll.optionTwo.text}:`}</Typography>
            {LinearProgressWithLabel(
              twoVotes,
              answer === "optionTwo" ? "primary" : "secondary"
            )}
          </Box>
        </Box>
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

const LinearProgressWithLabel = (votes, color) => {
  const { raw, percent } = votes;
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" color={color} value={percent} />
      </Box>
      <Box minWidth={50}>
        <Typography variant="body2" color="textSecondary" align="right">
          {`(${raw})${Math.round(percent)}% `}
        </Typography>
      </Box>
    </Box>
  );
};