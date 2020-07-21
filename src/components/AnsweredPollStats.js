import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI
import { Typography } from "@material-ui/core";

export class AnsweredPollStats extends Component {
  render() {
    const { id, poll, currentUser } = this.props;

    return (
      <div>
        <Typography>{`${poll.optionOne.text} or ${poll.optionTwo.text}?`}</Typography>
        <Typography>
          you would rather: "{poll[currentUser.answers[id]].text}"
        </Typography>
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
