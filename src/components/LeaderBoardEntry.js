import React from "react";
// Material UI
import { Avatar, Badge, Box, Typography } from "@material-ui/core";
import LeaderBoardEntryStats from "./LeaderBoardEntryStats";

/**
 * LeaderBoardEntry Component
 * @description a row on the leaderboard, holds all of the information for one user
 */
export const LeaderBoardEntry = (props) => {
  const { user, totals, place } = props; // get the poll information
  const { totalQuestions } = totals;
  const { _id, name, avatarURL } = user; // get the user's information

  return (
    <Box
      id="entry-box"
      display="flex"
      width="75%"
      border={1}
      borderColor="primary"
      m=".5rem"
    >
      <Box
        id="avatar-box"
        flexShrink={1}
        display="flex"
        alignItems="center"
        px="1rem"
      >
        <Badge
          badgeContent={place}
          color="primary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          <Avatar
            src={avatarURL}
            alt={"avatar of " + _id}
            style={{
              width: "6rem",
              height: "6rem"
            }}
          />
        </Badge>
      </Box>
      <Box
        id="info-box"
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box id="name-info">
          <Typography
            style={{ display: "inline-block", padding: ".125rem" }}
            variant="h6"
          >
            {name}
          </Typography>
          <Typography
            style={{ display: "inline-block", padding: ".125rem" }}
            variant="caption"
          >
            ({_id})
          </Typography>
        </Box>
        <LeaderBoardEntryStats user={user} totalQuestions={totalQuestions} />
      </Box>
    </Box>
  );
};

export default LeaderBoardEntry;
