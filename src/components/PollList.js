import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import Poll from "./Poll";
// Material UI Components
import { Box } from "@material-ui/core";
// Constants
export const ANSWERED = "ANSWERED";
export const NOT_ANSWERED = "NOT_ANSWERED";
export const ALL = "ALL";

/**
 * PollList Component - uses a filtered list of poll ids to render the individual polls
 */
export class PollList extends Component {
  // Returns a filtered, sorted list of poll ids
  getFilteredPolls = () => {
    const { users, pollIds, authedUser, filter } = this.props;

    if (filter === "ALL") {
      return pollIds;
    }
    const pollList =
      filter === ANSWERED
        ? pollIds.filter((id) => users[authedUser].answers[id])
        : pollIds.filter((id) => !users[authedUser].answers[id]);
    return pollList;
  };

  render() {
    return (
      <Box mx="auto" display="flex" flexDirection="column">
        {this.getFilteredPolls().map((id) => {
          return <Poll key={id} match={{ params: { id } }} />;
        })}
      </Box>
    );
  }
}

const mapStateToProps = ({ polls, users, authedUser }, { filter }) => {
  return {
    pollIds: Object.keys(polls).sort(
      (a, b) => polls[b].timestamp - polls[a].timestamp
    ),
    users,
    authedUser,
    filter: filter || false
  };
};

export default connect(mapStateToProps)(PollList);
