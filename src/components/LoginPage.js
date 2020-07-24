import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import UserSelector from "./UserSelector";
// Material UI
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export class LoginPage extends Component {
  render() {
    return (
      <Box display="flex" justifyContent="center" my="5rem">
        <Card>
          <StyledCardMedia image="jeffn12_avatar.jpg" />
          <CardHeader title="would you rather?" subheader="log in to play" />
          <CardContent children={<UserSelector />} />
        </Card>
      </Box>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(LoginPage);

const StyledCardMedia = withStyles({
  root: { height: "25%", minHeight: "140px" }
})(CardMedia);
