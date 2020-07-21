import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import LoginPage from "./LoginPage";
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
import { handleAnswerPoll } from "../actions/polls";

// Poll has been answered by authedUser if:  exists

export class Poll extends Component {
  handleChange = (option) => {
    const { dispatch, authedUser, id } = this.props;
    dispatch(handleAnswerPoll(id, option, authedUser));
  };

  render() {
    const { polls, users, id, authedUser } = this.props;
    const author = users[polls[id].author];
    const poll = polls[id] && polls[id];
    return poll ? (
      <Card style={{ margin: "10px" }}>
        <CardHeader
          avatar={<Avatar src={author.avatarURL} />}
          title={`${author.name} wants to know:`}
          subheader="would you rather..."
        />
        <CardContent>
          {authedUser ? (
            authedUser.answers[id] ? (
              <>
                <Typography>{`${poll.optionOne.text} or ${poll.optionTwo.text}?`}</Typography>
                <Typography>
                  you would rather: "{poll[authedUser.answers[id]].text}"
                </Typography>
              </>
            ) : (
              <>
                <Button
                  fullWidth={true}
                  variant="outlined"
                  color="primary"
                  onClick={() => this.handleChange(poll.optionOne.text)}
                >
                  {poll.optionOne.text}
                </Button>
                <Typography align="center">or...</Typography>
                <Button
                  fullWidth={true}
                  variant="outlined"
                  color="primary"
                  onClick={() => this.handleChange(poll.optionOne.text)}
                >
                  {poll.optionTwo.text}
                </Button>
              </>
            )
          ) : (
            <LoginPage />
          )}
        </CardContent>
      </Card>
    ) : (
      <Card>
        <CardContent>404: Poll Not Found</CardContent>
      </Card>
    );
  }
}

const mapStateToProps = ({ authedUser, polls, users }, { id }) => {
  return {
    authedUser,
    polls,
    users,
    id
  };
};

export default connect(mapStateToProps)(Poll);
