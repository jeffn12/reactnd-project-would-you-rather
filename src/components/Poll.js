import React, { Component } from "react";
import { connect } from "react-redux";

export class Poll extends Component {
  render() {
    return <div>I'm a Poll</div>;
  }
}

const mapStateToProps = () => {};

export default connect()(Poll);
