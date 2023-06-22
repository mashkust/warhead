import React from "react";
import { Typography, Box } from "@mui/material";
import ImgFigure from "./img-figure/img-figure";

const ImgResult = ({ img }) => {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="start"
      flexDirection="column"
      marginLeft="30px"
    >
      <Typography marginTop="10px" marginBottom="30px">
        Размеры элементов БО выполнены в масштабе 1:20 ( 2px [0.53мм] : 10мм ).
      </Typography>
      <ImgFigure figure={img["tlc"]} />
      <ImgFigure figure={img["bb"]} />
      <ImgFigure figure={img["tlc"]} />
    </Box>
  );
};

export default ImgResult;
