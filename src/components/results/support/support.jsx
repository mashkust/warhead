import { Typography, Box } from "@mui/material";
import { textSupport } from "./templates";

const Support = () => {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="start"
      flexDirection="column"
    >
      {textSupport.map((el) => (
        <Typography>{el}</Typography>
      ))}
    </Box>
  );
};

export default Support;
