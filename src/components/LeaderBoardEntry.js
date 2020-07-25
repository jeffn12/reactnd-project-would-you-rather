import React from "react";
// Material UI
import {
  Avatar,
  Box,
  Container,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const LeaderBoardEntry = (props) => {
  const { user, totals, place } = props;
  const { id, name, avatarURL } = user;
  const { totalQuestions } = totals;

  return (
    <Box
      p="1rem"
      width={3 / 4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h5" style={{ marginRight: "2rem" }}>
        {place}.
      </Typography>
      <StyledAvatar src={avatarURL} alt={"avatar of " + id} />
      <Box
        minWidth="10rem"
        mx="0.5rem"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Typography variant="h6" align="center">
          {name}
        </Typography>
        <Typography variant="body2" align="center">
          ({id})
        </Typography>
      </Box>
      <Box
        mx="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="body1" align="center">
          Number of Questions Answered
        </Typography>
        <Box display="flex" alignItems="center" width={1}>
          <Container>
            {CircularProgressWithLabel(
              Object.keys(user.answers).length,
              totalQuestions
            )}
          </Container>
          <Container>
            <Typography variant="subtitle2">
              {Object.keys(user.answers).length}/{totalQuestions}
            </Typography>
          </Container>
        </Box>
      </Box>
      <Box
        mx="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="body1" align="center">
          Number of Questions Asked
        </Typography>
        <Box display="flex" alignItems="center" width={1}>
          <Container>
            {CircularProgressWithLabel(user.questions.length, totalQuestions)}
          </Container>
          <Container>
            <Typography variant="subtitle2">
              {user.questions.length}/{totalQuestions}
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default LeaderBoardEntry;

const StyledAvatar = withStyles({
  root: {
    width: "50px",
    height: "50px"
  }
})(Avatar);

const CircularProgressWithLabel = (value, total) => {
  return (
    <Box
      my="0.5rem"
      position="relative"
      display="inline-flex"
      alignItems="center"
    >
      <CircularProgress
        size={50}
        variant="static"
        value={(value / total) * 100}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round((value / total) * 100)}%`}</Typography>
      </Box>
    </Box>
  );
};
