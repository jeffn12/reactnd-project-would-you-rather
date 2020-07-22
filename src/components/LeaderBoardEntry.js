import React from "react";
// Material UI
import {
  Avatar,
  Box,
  Container,
  Typography,
  CircularProgress
} from "@material-ui/core";

export const LeaderBoardEntry = (props) => {
  const { user, totals } = props;
  const { id, name, avatarURL } = user;
  const { totalAnswers, totalQuestions } = totals;

  return (
    <Box my="1rem" width={1} display="flex" alignItems="center">
      <Avatar src={avatarURL} alt={"avatar of " + id} />
      <Box minWidth={250} mx="0.5rem" display="flex" alignItems="center">
        <Typography variant="body1">{name}</Typography>
        <Typography variant="subtitle2">({id})</Typography>
      </Box>
      <Box
        mx="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="body1">Number of Questions Answered</Typography>
        <Box display="flex" alignItems="center" width={1}>
          <Container>
            {CircularProgressWithLabel(
              Object.keys(user.answers).length,
              totalAnswers
            )}
          </Container>
          <Container>
            <Typography variant="subtitle2" flexBasis="50%">
              {Object.keys(user.answers).length}/{totalAnswers}
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
        <Typography variant="body1">Number of Questions Asked</Typography>
        <Box display="flex" alignItems="center" width={1}>
          <Container>
            {CircularProgressWithLabel(user.questions.length, totalQuestions)}
          </Container>
          <Container>
            <Typography variant="subtitle2" flexBasis="50%">
              {user.questions.length}/{totalQuestions}
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default LeaderBoardEntry;

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
