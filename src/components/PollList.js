import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import Poll from "./Poll";

export const ANSWERED = "ANSWERED";
export const NOT_ANSWERED = "NOT_ANSWERED";
export const ALL = "ALL";

export class PollList extends Component {
  getFilteredPolls = () => {
    const { users, pollIds, authedUser, filter } = this.props;
    if (filter === "ALL") {
      return pollIds;
    }
    const pollList = users[authedUser]
      ? filter === ANSWERED
        ? pollIds.filter((id) => users[authedUser].answers[id])
        : pollIds.filter((id) => !users[authedUser].answers[id])
      : [];
    console.log(pollList);
    return pollList;
  };

  render() {
    return (
      <ul>
        {this.getFilteredPolls().map((id) => {
          return (
            <li key={id}>
              <Poll id={id} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ polls, users, authedUser }, { filter }) => {
  return {
    pollIds: Object.keys(polls).sort(
      (a, b) => polls[b].timestamp - polls[a].timestamp
    ),
    users,
    authedUser: authedUser ? authedUser.id : authedUser,
    filter: filter || false
  };
};

export default connect(mapStateToProps)(PollList);
