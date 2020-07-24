import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import LoginPage from "./LoginPage";
import AnsweredPollStats from "./AnsweredPollStats";
// Routing
import { Link } from "react-router-dom";
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
  /**
   * Handle poll submission by dispatching the handleAnswerPoll event with the poll id, current user, and the selected option
   * @param {String} option
   */
  handleChange = (option) => {
    const { dispatch, authedUser, id } = this.props;
    dispatch(handleAnswerPoll(id, option, authedUser));
  };

  render() {
    const { polls, users, id, authedUser } = this.props;

    // Ask user to login before showing the poll if there no authed user is set
    if (!authedUser) return <LoginPage />;

    // If the poll does not exist, show a "404: Not Found" error
    if (!polls[id])
      return (
        <Card>
          <CardContent>404: Poll Not Found</CardContent>
        </Card>
      );

    const poll = polls[id]; // Use the ID to get the poll Object
    const author = users[poll.author]; // The user object of the person who created the poll
    const currentUser = users[authedUser]; // The user object of the person who is answering the poll
    const hasAnswered = poll[currentUser.answers[id]] ? true : false;

    return (
      <Link
        to={hasAnswered ? `/questions/${id}` : ""}
        style={{ textDecoration: "none", cursor: "default" }}
      >
        <Card style={{ margin: "0.5rem" }}>
          <CardHeader
            avatar={<Avatar src={author.avatarURL} />}
            title={`${author.name} wants to know:`}
            subheader="would you rather..."
          />
          {hasAnswered ? (
            <AnsweredPollStats id={id} /> // If the user has already answered the poll, render the stats for it
          ) : (
            // If the user has not answered the poll, render both options
            <CardContent>
              <Button
                fullWidth={true}
                variant="outlined"
                color="primary"
                onClick={() => this.handleChange("optionOne")}
                children={poll.optionOne.text}
              />
              <Typography align="center">or...</Typography>
              <Button
                fullWidth={true}
                variant="outlined"
                color="primary"
                onClick={() => this.handleChange("optionTwo")}
                children={poll.optionTwo.text}
              />
            </CardContent>
          )}
        </Card>
      </Link>
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

/**  Question for reviewer:
 * would it make sense to move the CardContent with the options for answering the poll into its own component,
 *  and then pass the option text and handler function down as props?  The fact that the handler function invokes 'dispatch'
 *  made me keep it like this.
 */
