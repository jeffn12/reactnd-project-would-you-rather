import React, { Component } from "react";
import { connect } from "react-redux";
// Components
// Material UI Components
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography
} from "@material-ui/core";

export class Poll extends Component {
  render() {
    const { polls, users, id } = this.props;
    const author = users[polls[id].author];
    return polls[id] ? (
      <Card style={{ margin: "10px" }}>
        <CardHeader
          avatar={<Avatar src={author.avatarURL} />}
          title={`${author.name} wants to know:`}
          subheader="would you rather..."
        />
        <CardContent>
          <Typography>{`${polls[id].optionOne.text} or ${polls[id].optionTwo.text}?`}</Typography>
        </CardContent>
      </Card>
    ) : (
      <Card>
        <CardContent>404: Poll Not Found</CardContent>
      </Card>
    );
  }
}

const mapStateToProps = ({ polls, users }, { id }) => {
  return {
    polls,
    users,
    id
  };
};

export default connect(mapStateToProps)(Poll);
