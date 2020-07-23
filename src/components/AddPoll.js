import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField
} from "@material-ui/core";
// Action Handlers
import { handleAddPoll } from "../actions/shared";

export class AddPoll extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };

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
        <Box w={0.5}>
          <Card>
            <CardHeader
              title="add a new poll"
              subheader="would you rather..."
            />
            <CardContent>
              <Container>
                <TextField
                  id="optionOneText"
                  label="option one"
                  value={optionOneText}
                  onChange={this.handleOptionOneText}
                  required
                />
              </Container>
              <Container>
                <TextField
                  id="optionTwoText"
                  label="option two"
                  value={optionTwoText}
                  onChange={this.handleOptionTwoText}
                  required
                />
              </Container>
              <Button
                variant="contained"
                color="primary"
                disabled={optionOneText === "" || optionTwoText === ""}
                onClick={this.handleSubmit}
              >
                ADD POLL
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = ({ users, polls, authedUser }) => {
  return {
    users,
    polls,
    authedUser
  };
};

export default connect(mapStateToProps)(AddPoll);
