import React, { Component } from "react";
import { connect } from "react-redux";
// Actions
import { setAuthedUser } from "../actions/authedUser";
// Material UI
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export class UserSelector extends Component {
  render() {
    const { dispatch, userIds, users, authedUser } = this.props;

    return (
      <StyledFormControl>
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
              {id}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
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

const StyledFormControl = withStyles({
  root: {
    minWidth: "400px",
    width: "50%"
  }
})(FormControl);
