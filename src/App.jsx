import React, { useMemo, useState } from "react";
import Form from "./components/form/form";
import Results from "./components/results/results";
import Box from "@mui/material/Box";
import getParams from "./utils";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [inputFields, setInputFields] = useState({
    location: true,
    Lmax: 10000,
    J1: 2570,
    ΔPф: 20,
    σr: 0.15,
    P1: 0.9,
    Rц: 5,
    Δpф: 0.03,
    M1: 0.9,
  });

  const results = useMemo(() => {
    console.log(getParams(inputFields).message);
    return getParams(inputFields);
  }, [isStart]);

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Form
          inputFields={inputFields}
          setInputFields={setInputFields}
          isStart={isStart}
          setIsStart={setIsStart}
          message={results.message}
        />
        <Results results={results} />
      </Box>
      {/* <Box>
        <Typography>Посмотри результаты расчета в других форматах</Typography>
        <Button  variant="contained">
          Таблица
        </Button>
        <Button variant="contained">
          Схема
        </Button>
      </Box> */}
    </Box>
  );
}

export default App;
