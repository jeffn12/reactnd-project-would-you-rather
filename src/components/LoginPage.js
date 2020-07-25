import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import UserSelector from "./UserSelector";
// Routing
import { Link } from "react-router-dom";
// Material UI
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

/**
 * LoginPage Component
 * @description the login box with the game logo and a user selector
 */
export class LoginPage extends Component {
  render() {
    // Return the LoginPage if we are not at the /add-user endpoint
    return this.props.location.pathname !== "/add-user" ? (
      <Box display="flex" justifyContent="center" my="5rem">
        <Card>
          <CardMedia
            style={{ height: "25%", minHeight: "140px" }}
            image="/would_you_rather_logo.jpg"
          />
          <CardHeader subheader="log in to play" />
          <CardContent children={<UserSelector />} />
        </Card>
        <Link to="/add-user">
          <Fab
            variant="extended"
            style={{
              position: "absolute",
              bottom: 20,
              right: 20
            }}
          >
            <AddIcon />
            add user
          </Fab>
        </Link>
      </Box>
    ) : (
      <></>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(LoginPage);
