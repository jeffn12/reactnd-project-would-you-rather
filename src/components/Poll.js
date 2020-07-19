import React, { Component } from "react";
import { connect } from "react-redux";

export class Poll extends Component {
  render() {
    const { polls, id } = this.props;
    return polls[id] ? (
      <p>{`${polls[id].optionOne.text} or ${polls[id].optionTwo.text}?`}</p>
    ) : (
      <p>Not Found</p>
    );
  }
}

const mapStateToProps = ({ polls }, { id }) => {
  return {
    polls,
    id
  };
};

export default connect(mapStateToProps)(Poll);
