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
  Alert,
} from "@mui/material";
import {
  inputsGroupBase,
  inputsGroupPlatform,
  inputsGroupPoint,
} from "./templates";
import FormItem from "../form-item/form-item";

const Form = ({
  inputFields,
  setInputFields,
  isStart,
  setIsStart,
  message,
}) => {
  const clickRadioHandler = (evt) => {
    let isStatic = true;
    isStatic = evt.target.value === "static" ? true : false;
    setInputFields((prev) => ({ ...prev, location: isStatic }));
  };
  const ckickButtonHandler = () => {
    setIsStart(!isStart);
  };
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
      <Typography variant="h5" marginBottom={"15px"}>
        Формирование полезной нагрузки моноблочной УБР
      </Typography>
      <FormControl marginBottom="30px">
        <FormLabel>Базирование</FormLabel>
        <RadioGroup row defaultValue="static">
          <FormControlLabel
            value="mob"
            control={<Radio />}
            label="Мобильное"
            onChange={clickRadioHandler}
          />
          <FormControlLabel
            value="static"
            control={<Radio />}
            label="Стационарное"
            onChange={clickRadioHandler}
          />
        </RadioGroup>
      </FormControl>
      {inputsGroupBase.map((el) => (
        <FormItem
          label={el.label}
          text={el.text}
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
      ))}
      <Typography variant="h6">Для малоразмерной цели (R=0)</Typography>
      {inputsGroupPoint.map((el) => (
        <FormItem
          label={el.label}
          text={el.text}
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
      ))}
      <Typography variant="h6">Для площадной цели</Typography>
      {inputsGroupPlatform.map((el) => (
        <FormItem
          label={el.label}
          text={el.text}
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
      ))}
      <Box display={"flex"} flexDirection={"row"}>
        <Button
          width="60px"
          variant="contained"
          onClick={ckickButtonHandler}
          sx={{ marginRight: "20px" }}
        >
          Применить
        </Button>

        {message && <Alert severity="error">{message}</Alert>}
      </Box>
    </Box>
  );
};

export default Form;
