import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI
import { Typography } from "@material-ui/core";

export class AnsweredPollStats extends Component {
  render() {
    const { id, poll, currentUser } = this.props;

    const answers = {
      one: poll.optionOne.votes.length,
      two: poll.optionTwo.votes.length,
      total: poll.optionOne.votes.length + poll.optionTwo.votes.length
    };

    return (
      <div>
        <Typography>{`${poll.optionOne.text} (${answers.one}/${answers.total}):`}</Typography>
        <Typography>{`${poll.optionTwo.text} (${answers.two}/${answers.total}):`}</Typography>
      </div>
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
