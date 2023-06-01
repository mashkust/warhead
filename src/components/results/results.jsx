import React, { useState } from "react";
import { Box } from "@mui/material";
import Menu from "./menu/menu";
import TableResult from "./table-result/table-result";
import InfoResult from "./info-result/info-result";
import DepthResult from "./depth-result/depth-result";
import ImgResult from "./img-result/img-result";
import Support from "./support/support";

const Results = ({ results }) => {
  const [inputDepth, setInputDepth] = useState({
    D: results.info.dimensions.D,
    lobr: results.info.dimensions.lobr,
    dmin: 0,
    Pmax: 0.11,
    E1: 140,
    E2: 9.6,
    ν12: 0.33,
    ν21: 0.023,
    ρ: 1500,
  });

  const [isImg, setIsImg] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const [isDepth, setIsDepth] = useState(false);
  const [isSupport, setIsSupport] = useState(false);
  const [material, setMaterial] = useState("");
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
          setIsSupport={setIsSupport}
        />
      </Box>
      <Box display="flex" marginTop="20px">
        {isDepth && (
          <DepthResult
            inputDepth={inputDepth}
            setInputDepth={setInputDepth}
            material={material}
            setMaterial={setMaterial}
          />
        )}
        {isTable && <TableResult table={results.table} />}
        {isImg && <ImgResult img={results.info.img} />}
        {isSupport && <Support />}
      </Box>
    </Box>
  );
};

export default Results;
