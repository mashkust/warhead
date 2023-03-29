import React, { useState } from "react";
import { Box } from "@mui/material";
import Menu from "./menu/menu";
import TableResult from "./table-result/table-result";
import InfoResult from "./info-result/info-result";
import DepthResult from "./depth-result/depth-result";

const Results = ({ results }) => {
    const [inputDepth, setInputDepth] = useState({
        D: 1.65,
        l: 2350,
        Pmax: 20,
        E1: 0.15,
        E2: 0.9,
        ν12: 0.03,
        ν21: 0.9,
    });

    const [isClose, setIsClose] = useState(false);
    const [isTable, setIsTable] = useState(false);
    const [isDepth, setIsDepth] = useState(false);
    return (
        <Box margin={2} width="700px" display="flex" flexDirection="column">
            <InfoResult info={results.info} />
            <Box display="flex" justifyContent="center">
                <Menu setIsClose={setIsClose} setIsTable={setIsTable} setIsDepth={setIsDepth} />
            </Box>
            {!isClose && (
                <Box display="flex" marginTop="20px">
                    {isDepth && <DepthResult inputDepth={inputDepth} setInputDepth={setInputDepth} />}
                    {isTable && <TableResult table={results.table} />}
                </Box>
            )}
        </Box>
    );
};

export default Results;
