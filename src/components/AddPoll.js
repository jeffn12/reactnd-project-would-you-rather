import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
// Action Handlers
import { handleAddPoll } from "../actions/shared";

/**
 * AddPoll Component
 * @description form to collect information about a new poll.
 * The user must include 2 options in order for the submit button to become active
 */
export class AddPoll extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };

  // Controlled Component Handlers:
  handleOptionOneText = (e) => {
    e.persist();
    this.setState(() => ({
      optionOneText: e.target.value
    }));
  };
  handleOptionTwoText = (e) => {
    e.persist();
    this.setState(() => ({
      optionTwoText: e.target.value
    }));
  };
  handleSubmit = (e) => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authedUser } = this.props;
    dispatch(handleAddPoll(authedUser, optionOneText, optionTwoText));
    this.props.history.push("/");
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;

    return (
      <Box
        m={".5rem"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={1}>
          <Card>
            <CardMedia
              style={{ height: "25%", minHeight: "140px" }}
              image="/would_you_rather_logo.jpg"
            />
            <CardHeader
              title="add a new poll"
              subheader="would you rather..."
            />
            <CardContent>
              <Container
                children={
                  <StyledTextField
                    id="optionOneText"
                    label="option one"
                    value={optionOneText}
                    onChange={this.handleOptionOneText}
                    fullWidth
                    required
                  />
                }
              />
              <Container
                children={
                  <StyledTextField
                    id="optionTwoText"
                    label="option two"
                    value={optionTwoText}
                    onChange={this.handleOptionTwoText}
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
                    disabled={optionOneText === "" || optionTwoText === ""}
                    onClick={this.handleSubmit}
                    children="ADD POLL"
                  />
                }
              />
            </CardContent>
          </Card>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(AddPoll);

// Custom Styles
const StyledTextField = withStyles({
  root: {
    width: "20rem"
  }
})(TextField);
