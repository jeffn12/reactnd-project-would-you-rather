import React, { Component } from "react";
import { connect } from "react-redux";

export class UserSelector extends Component {
  render() {
    const { userIds } = this.props;

    return (
      <ul>
        {userIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { userIds: Object.keys(users) };
};

export default connect(mapStateToProps)(UserSelector);
