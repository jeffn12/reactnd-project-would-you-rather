import React, { Component } from "react";
import { connect } from "react-redux";

export class NavBar extends Component {
  render() {
    const { authedUser } = this.props;
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
        <a href="/#" className="nav-link current-user">
          {authedUser}
        </a>
      </nav>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(NavBar);
