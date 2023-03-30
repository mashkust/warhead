import React, { useMemo } from "react";
import { Typography, Box } from "@mui/material";

const ImgFigure = ({ figure }) => {
  return (
    <Box flexDirection="column">
      <Box flexDirection="row">
        <Box
          height={`${(figure[1] / 2) * 200}px`}
          width="1px"
          sx={{ backgroundColor: "black" }}
        ></Box>
        <Box
          width={`${figure[0] * 200}px`}
          height="1px"
          sx={{ backgroundColor: "black" }}
        ></Box>
      </Box>
      <Box
        height={`${(figure[1] / 2) * 200}px`}
        width="1px"
        sx={{ backgroundColor: "black" }}
      ></Box>
    </Box>
  );
};

export default ImgFigure;
