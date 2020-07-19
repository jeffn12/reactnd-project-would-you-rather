import React, { Component } from "react";
import { connect } from "react-redux";

export class PollList extends Component {
  render() {
    return <div>I'm the Poll List</div>;
  }
}

const mapStateToProps = () => {};

export default connect()(PollList);
