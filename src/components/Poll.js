import React, { Component } from "react";
import { connect } from "react-redux";
// Components
// Material UI Components
import { Avatar, Card, CardHeader, CardContent } from "@material-ui/core";
/**
 * TODO:
 *  Put each poll on its own 'Card'!
 */

export class Poll extends Component {
  render() {
    const { polls, users, id } = this.props;
    const author = users[polls[id].author];
    return polls[id] ? (
      <Card>
        <CardHeader
          avatar={<Avatar src={author.avatarURL} />}
          title={`${author.name} want to know:`}
          subheader="would you rather..."
        />
        {`${polls[id].optionOne.text} or ${polls[id].optionTwo.text}?`}
      </Card>
    ) : (
      <Card>Not Found</Card>
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
