import React, { useMemo, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { inputsDimensions, inputsMaterials } from "./templates";
import FormItem from "../../form-item/form-item";
import { getDepth } from "../../../utils";

const DepthResult = ({ inputDepth, setInputDepth }) => {
  const [isStart, setIsStart] = useState(false);

  const ckickButtonHandler = () => {
    setIsStart(!isStart);
  };

  const depth = useMemo(() => {
    return getDepth(inputDepth);
  }, [isStart]);

  return (
    <Box
      component="form"
      display="flex"
      justifyContent="start"
      alignItems="start"
      flexDirection="column"
      fontWeight={500}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6">Расчет оболочки</Typography>
      <Typography>
        Диаметр и длина рассчитаны на основе введенных данных, уточните
        значения.
      </Typography>
      {inputsDimensions.map((el) => (
        <FormItem
          label={el.label}
          text={el.text}
          inputFields={inputDepth}
          setInputFields={setInputDepth}
        />
      ))}
      {inputsMaterials.map((el) => (
        <FormItem
          label={el.label}
          text={el.text}
          inputFields={inputDepth}
          setInputFields={setInputDepth}
        />
      ))}
      <Button width="60px" variant="contained" onClick={ckickButtonHandler}>
        Применить
      </Button>
      <Typography marginTop="10px" fontWeight="600">
        Толщина ГО: {Number(depth).toFixed(2)} мм.
      </Typography>
    </Box>
  );
};

export default DepthResult;
