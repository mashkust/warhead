import React, { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import ImgFigure from "./img-figure/img-figure";

const ImgResult = ({ img }) => {
  const imgParams = useMemo(() => {
    // return getDimensions();
  }, []);
  console.log(img["bb"][0]);

  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="start"
      flexDirection="column"
    >
      <Typography marginTop="20px">
        Длина ГО {"<в разработке>"}. Построения выполнены в масштабе ... .Эскиз
        перерисовыввается при измении исходных данных.
      </Typography>
      <ImgFigure figure={img["tlc"]} />
      <ImgFigure figure={img["bb"]} />
      <ImgFigure figure={img["tlc"]} />
    </Box>
  );
};

export default ImgResult;
