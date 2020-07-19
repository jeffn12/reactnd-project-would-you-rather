import React, { Component } from "react";
import { connect } from "react-redux";

export class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <a href="/#" className="nav-link">
          Home
        </a>
        <a href="/#" className="nav-link">
          Leaderboard
        </a>
        <a href="/#" className="nav-link">
          Create a New Poll
        </a>
        <a href="/#" className="nav-link">
          User Info
        </a>
      </nav>
    );
  }
}

const mapStateToProps = () => {};

export default connect()(NavBar);
