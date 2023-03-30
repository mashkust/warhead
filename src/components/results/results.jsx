import React, { useState } from "react";
import { Box } from "@mui/material";
import Menu from "./menu/menu";
import TableResult from "./table-result/table-result";
import InfoResult from "./info-result/info-result";
import DepthResult from "./depth-result/depth-result";
import ImgResult from "./img-result/img-result";

const Results = ({ results }) => {
  const [inputDepth, setInputDepth] = useState({
    D: 1650,
    l: 2350,
    Rскр: 100,
    Pmax: 0.14,
    E1: 48,
    E2: 9.6,
    ν12: 0.25,
    ν21: 0.052,
    ρ: 1800,
  });

  const [isImg, setIsImg] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const [isDepth, setIsDepth] = useState(false);
  return (
    <Box
      margin={2}
      width="700px"
      display="flex"
      flexDirection="column"
      marginTop="60px"
    >
      <InfoResult text={results.info.text} />
      <Box display="flex" justifyContent="center" marginTop="10px">
        <Menu
          setIsImg={setIsImg}
          setIsTable={setIsTable}
          setIsDepth={setIsDepth}
        />
      </Box>
      <Box display="flex" marginTop="20px">
        {isDepth && (
          <DepthResult inputDepth={inputDepth} setInputDepth={setInputDepth} />
        )}
        {isTable && <TableResult table={results.table} />}
        {isImg && <ImgResult img={results.info.img} />}
      </Box>
    </Box>
  );
};

export default Results;
