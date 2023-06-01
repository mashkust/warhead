import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Selector = ({
  valuesMaterials,
  setInputDepth,
  material,
  setMaterial,
}) => {
  const handleChange = (evt) => {
    // setMaterial();
    const values = evt.target.value;
    setInputDepth((prev) => ({
      ...prev,
      E1: values.E1,
      E2: values.E2,
      ν12: values.ν12,
      ν21: values.ν21,
      ρ: values.ρ,
    }));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel> Материал</InputLabel>
      <Select value={material} label="Волокно" onChange={handleChange}>
        {valuesMaterials.map((el) => {
          return <MenuItem value={el.values}>{el.text}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Selector;
