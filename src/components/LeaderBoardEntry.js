import React from "react";
// Material UI
import {
  Avatar,
  Badge,
  Box,
  Container,
  Typography,
  CircularProgress
} from "@material-ui/core";

/**
 * LeaderBoardEntry Component
 * @description a row on the leaderboard, holds all of the information for one user
 */
export const LeaderBoardEntry = (props) => {
  const { user, totals, place } = props; // get the poll information
  const { totalQuestions } = totals;
  const { id, name, avatarURL } = user; // get the user's information

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
            alt={"avatar of " + id}
            style={{ width: "6rem", height: "6rem", display: "inline-block" }}
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
            ({id})
          </Typography>
        </Box>
        <Box id="stats-info" display="flex">
          <Box
            mx="0.5rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Typography variant="body2" align="center">
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
            <Typography variant="2" align="center">
              Number of Questions Asked
            </Typography>
            <Box display="flex" alignItems="center" width={1}>
              <Container>
                {CircularProgressWithLabel(
                  user.questions.length,
                  totalQuestions
                )}
              </Container>
              <Container>
                <Typography variant="subtitle2">
                  {user.questions.length}/{totalQuestions}
                </Typography>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeaderBoardEntry;

// Custom circular progress bar with percentage label
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
