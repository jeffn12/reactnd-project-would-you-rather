import React from "react";
// Material UI
import { Avatar, Box, Typography } from "@material-ui/core";

export const LeaderBoardEntry = (props) => {
  const { user, stats } = props;
  const { id, name, avatarURL } = user;
  const { totalAnswers, totalQuestions } = stats;

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
      >
        <Typography variant="body1">Number of Questions Answered</Typography>
        <Typography variant="subtitle2" align="center">
          {Object.keys(user.answers).length}
        </Typography>
      </Box>
      <Box
        mx="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="start"
      >
        <Typography variant="body1">Number of Questions Asked</Typography>
        <Typography variant="subtitle2" align="center">
          {user.questions.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default LeaderBoardEntry;
