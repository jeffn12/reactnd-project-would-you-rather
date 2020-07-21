import React, { Component } from "react";
import { connect } from "react-redux";
// Components

// Material UI
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core";
// Actions
import { setAuthedUser } from "../actions/authedUser";

export class UserSelector extends Component {
  render() {
    const { dispatch, userIds, users, authedUser } = this.props;

    return (
      <FormControl>
        <InputLabel id="user-select-label">Choose Your Username</InputLabel>
        <Select
          labelId="user-select-label"
          id="user-select"
          onChange={(event) => {
            dispatch(setAuthedUser(users[event.target.value]));
          }}
          value={authedUser ? authedUser : ""}
        >
          {userIds.map((id) => (
            <MenuItem key={id} value={id}>
              {id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    userIds: Object.keys(users),
    users,
    authedUser
  };
};

export default connect(mapStateToProps)(UserSelector);
