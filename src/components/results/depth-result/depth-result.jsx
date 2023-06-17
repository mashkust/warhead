import React, { useMemo, useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import {
  inputsDimensions,
  inputsMaterials,
  valuesMaterials,
} from "./templates";
import FormItem from "../../form-item/form-item";
import { getDepth } from "../../../utils";
import Selector from "./selector/selector";

const DepthResult = ({ inputDepth, setInputDepth, material, setMaterial }) => {
  const [isStart, setIsStart] = useState(false);

  const clickButtonHandler = () => {
    setIsStart(!isStart);
  };

  const depth = useMemo(() => {
    if (isStart) {
      return getDepth(inputDepth).b;
    }
  }, [isStart]);

  const weight = useMemo(() => {
    if (isStart) {
      return getDepth(inputDepth).mgo;
    }
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
      <Selector
        valuesMaterials={valuesMaterials}
        setInputDepth={setInputDepth}
        material={material}
        setMaterial={setMaterial}
      />
      <Typography>
        Диаметр и длина рассчитаны на основе массового расчета, уточните
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
      <Button width="60px" variant="contained" onClick={clickButtonHandler}>
        {isStart ? "Пересчитать" : "Применить"}
      </Button>
      {isStart && (
        <Typography marginTop="10px" fontWeight="600">
          Толщина ГО: {Number(depth).toFixed(2)} мм, т.е.{" "}
          {Math.ceil(Number(depth))} мм. Масса конической части ГО:{" "}
          {Number(weight).toFixed(2)}.
        </Typography>
      )}
    </Box>
  );
};

export default DepthResult;
