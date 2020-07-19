import React, { Component } from "react";
import { connect } from "react-redux";

export class PollList extends Component {
  render() {
    const { pollIds } = this.props;
    console.log(pollIds);
    return (
      <ul>
        {pollIds.map((id) => (
          <li key={id}>Hey There!</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ polls, authedUser }) => {
  return {
    pollIds: Object.keys(polls).sort(
      (a, b) => polls[b].timestamp - polls[a].timestamp
    )
  };
};

export default connect(mapStateToProps)(PollList);
