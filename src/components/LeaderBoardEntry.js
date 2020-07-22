import React, { Component } from "react";
// Material UI
import { Box, Typography } from "@material-ui/core";

export const LeaderBoardEntry = (props) => {
  const { user } = props;

  return <Typography>{JSON.stringify(user)}</Typography>;
};

export default LeaderBoardEntry;
