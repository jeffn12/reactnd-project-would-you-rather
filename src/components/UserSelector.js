import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI
import {
  Avatar,
  InputLabel,
  MenuItem,
  Select,
  FormControl
} from "@material-ui/core";
// Actions
import { setAuthedUser } from "../actions/authedUser";

/**
 * UserSelector Component
 * @description input selector that displays a list of available users
 * each option on the list shows the users avatar and their id
 */
export class UserSelector extends Component {
  render() {
    const { dispatch, userIds, users, authedUser } = this.props;

    return (
      <FormControl style={{ minWidth: "350px", width: "50%" }}>
        <InputLabel id="user-select-label">Choose Your Username</InputLabel>
        <Select
          labelId="user-select-label"
          id="user-select"
          onChange={(event) => {
            dispatch(setAuthedUser(event.target.value));
          }}
          value={users[authedUser] ? users[authedUser].id : ""}
        >
          {userIds.map((id) => (
            <MenuItem key={id} value={id}>
              <Avatar
                src={users[id].avatarURL}
                style={{ marginRight: "1rem" }}
              />
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
