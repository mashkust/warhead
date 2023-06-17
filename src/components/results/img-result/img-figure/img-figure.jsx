import React, { useMemo } from "react";
import { Typography, Box } from "@mui/material";

const ImgFigure = ({ figure }) => {
  return (
    <Box flexDirection="row" position="relative">
      <Box position="absolute" left="-50px" top="40%">
        ⌀{Number(figure[1] * 1000).toFixed()}
      </Box>
      <Box position="absolute" left="40%" top="2px">
        {Number(figure[0] * 1000).toFixed()}
      </Box>
      <Box position="absolute" right="-30px" top="2px">
        R{Number(figure[1] * 0.1 * 1000).toFixed()}
      </Box>
      <Box flexDirection="column">
        {/* <Box
        // position="absolute"
        // top={`${figure[1] * 2 * 0.1 * 200 * 2}px`}
        // left={`${figure[0] * 200 - figure[1] * 0.1 * 200}px`}
        width={`${figure[0] * 200}px`}
        height="1px"
        sx={{
          backgroundColor: "black",
          clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
        }}
      ></Box> */}
        <Box flexDirection="row" position="relative">
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
          <Box
            width={`${figure[1] * 0.1 * 200}px`}
            height={`${figure[1] * 2 * 0.1 * 200}px`}
            position="absolute"
            top={`${figure[1] * 2 * 0.1 * 200 * 2}px`}
            left={`${figure[0] * 200 - figure[1] * 0.1 * 200}px`}
            sx={{
              border: "solid 1px black",
              borderRadius: "0 100% 100% 0 / 0 50% 50% 0",
            }}
          ></Box>
        </Box>
        <Box
          height={`${(figure[1] / 2) * 200}px`}
          width="1px"
          sx={{ backgroundColor: "black" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default ImgFigure;
