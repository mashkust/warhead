import * as React from "react";
import {
  FormControl,
  Typography,
  Button,
  Box,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { inputsDimensions, inputsMaterials } from "./templates";
import FormItem from "../../form-item/form-item";

const DepthResult = ({ inputDepth, setInputDepth }) => {
  return (
    <Box
      component="form"
      display="flex"
      justifyContent="start"
      alignItems="start"
      flexDirection="column"
      margin={2}
      fontWeight={500}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6">Расчет оболочки</Typography>
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
      <Button width="60px" variant="contained">
        Применить
      </Button>
    </Box>
  );
};

export default DepthResult;
