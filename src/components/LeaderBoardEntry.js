import React from "react";
// Material UI
import { Avatar, Box, Typography } from "@material-ui/core";

export const LeaderBoardEntry = (props) => {
  const { user } = props;
  const { id, name, avatarURL } = user;

  return (
    <Box my="1rem" display="flex" alignItems="center">
      <Avatar src={avatarURL} alt={"avatar of " + id} />
      <Box mx="0.5rem" display="flex" alignItems="center">
        <Typography variant="body1">{name}</Typography>
        <Typography variant="subtitle2">({id})</Typography>
      </Box>
    </Box>
  );
};

export default LeaderBoardEntry;
