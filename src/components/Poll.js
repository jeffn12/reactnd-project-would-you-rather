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
  Typography
} from "@material-ui/core";

// Poll has been answered by authedUser if:  exists

export class Poll extends Component {
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
              <Typography>{poll[authedUser.answers[id]].text}</Typography>
            ) : (
              <Typography>{`${poll.optionOne.text} or ${poll.optionTwo.text}?`}</Typography>
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
