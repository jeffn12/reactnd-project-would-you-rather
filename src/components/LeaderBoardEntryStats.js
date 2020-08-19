import React from "react";
// Material UI Components
import {
  Box,
  Container,
  CircularProgress,
  Typography
} from "@material-ui/core";
// Material UI Hooks
import { useMediaQuery } from "@material-ui/core";

/**
 * LeaderBoardEntryStats Component
 * @description generate the graphs from the stats for the leaderboard entry
 */
export const LeaderBoardEntryStats = (props) => {
  const { user, totalQuestions } = props;

  const mediaMatch = useMediaQuery("(min-width:660px)"); // For smaller screens, display graphs vertically
  return (
    <Box
      id="stats-info"
      display="flex"
      flexDirection={mediaMatch ? "row" : "column"}
    >
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
        <Typography variant="body2" align="center">
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

export default LeaderBoardEntryStats;

// Custom circular progress bar with percentage label
const CircularProgressWithLabel = (value, total) => {
  total = total === 0 ? 1 : total;
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
