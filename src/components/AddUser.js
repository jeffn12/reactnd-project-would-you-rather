import React, { Component } from "react";
import { connect } from "react-redux";
// Routing
import { Link } from "react-router-dom";
// Material UI
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  Fab
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
// Action Handlers
import { handleAddUser } from "../actions/users";

/**
 * AddUser Component
 * @description form to create a new user for the game.  Requires a unique ID, name,
 * and an avatar url.
 */
export class AddUser extends Component {
  state = {
    id: "",
    name: "",
    avatarURL: ""
  };

  // Controlled Component Handlers:
  handleIdText = (e) => {
    e.persist();
    this.setState(() => ({
      id: e.target.value
    }));
  };
  handleNameText = (e) => {
    e.persist();
    this.setState(() => ({
      name: e.target.value
    }));
  };
  handleAvatarUrlText = (e) => {
    e.persist();
    this.setState(() => ({
      avatarURL: e.target.value
    }));
  };

  // Submission Handler
  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, avatarURL } = this.state;
    this.setState({ id: "", name: "", avatarURL: "" });
    this.props.dispatch(handleAddUser({ id, name, avatarURL }));
    this.props.history.push("/"); // push back to the home route
  };

  render() {
    const { id, name, avatarURL } = this.state;

    return (
      <Box
        m={".5rem"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={1}>
          <Card>
            <CardHeader
              title="add a new user"
              subheader="(all information is required)"
            />
            <CardContent>
              <Container
                children={
                  <StyledTextField
                    id="idText"
                    label="id"
                    value={id}
                    onChange={this.handleIdText}
                    fullWidth
                    required
                  />
                }
              />
              <Container
                children={
                  <StyledTextField
                    id="nameText"
                    label="name"
                    value={name}
                    onChange={this.handleNameText}
                    required
                  />
                }
              />
              <Container
                children={
                  <StyledTextField
                    id="avatarUrlText"
                    label="avatar url"
                    value={avatarURL}
                    onChange={this.handleAvatarUrlText}
                    required
                  />
                }
              />
              <Container
                style={{ margin: "0.5rem auto" }}
                children={
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={id === "" || name === "" || avatarURL === ""}
                    onClick={this.handleSubmit}
                    children="ADD USER"
                  />
                }
              />
            </CardContent>
          </Card>
        </Box>
        <Link to="/">
          <Fab
            variant="extended"
            style={{
              position: "absolute",
              bottom: 20,
              right: 20
            }}
          >
            <HomeIcon />
            home
          </Fab>
        </Link>
      </Box>
    );
  }
}

export default connect()(AddUser);

// Custom Style
const StyledTextField = withStyles({
  root: {
    width: "20rem"
  }
})(TextField);
