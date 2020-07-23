import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import LoginPage from "./LoginPage";
import AnsweredPollStats from "./AnsweredPollStats";
// Material UI Components
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
// Helpers
import { handleAnswerPoll } from "../actions/shared";

export class Poll extends Component {
  handleChange = (option) => {
    const { dispatch, authedUser, id } = this.props;
    dispatch(handleAnswerPoll(id, option, authedUser));
  };

  render() {
    const { polls, users, id, authedUser } = this.props;

    if (!polls[id])
      return (
        <Card>
          <CardContent>404: Poll Not Found</CardContent>
        </Card>
      );

    if (!authedUser) return <LoginPage />;

    const poll = polls[id];
    const author = users[poll.author];
    const currentUser = users[authedUser];

    return (
      <Card style={{ margin: "10px" }}>
        <CardHeader
          avatar={<Avatar src={author.avatarURL} />}
          title={`${author.name} wants to know:`}
          subheader="would you rather..."
        />

        {poll[currentUser.answers[id]] ? (
          <AnsweredPollStats id={id} /> // If the user has already answered the poll, render the stats for it
        ) : (
          <>
            <CardContent>
              <Button
                fullWidth={true}
                variant="outlined"
                color="primary"
                onClick={() => this.handleChange("optionOne")}
              >
                {poll.optionOne.text}
              </Button>
              <Typography align="center">or...</Typography>
              <Button
                fullWidth={true}
                variant="outlined"
                color="primary"
                onClick={() => this.handleChange("optionTwo")}
              >
                {poll.optionTwo.text}
              </Button>
            </CardContent>
          </>
        )}
      </Card>
    );
  }
}

const mapStateToProps = ({ authedUser, polls, users }, props) => {
  const { id } = props.match.params;
  return {
    authedUser,
    polls,
    users,
    id
  };
};

export default connect(mapStateToProps)(Poll);
