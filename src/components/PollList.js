import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import Poll from "./Poll";

export class PollList extends Component {
  render() {
    const { pollIds } = this.props;
    console.log(pollIds);
    return (
      <ul>
        {pollIds.map((id) => (
          <li key={id}>
            <Poll id={id} />
          </li>
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
