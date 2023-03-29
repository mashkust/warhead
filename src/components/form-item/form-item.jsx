import * as React from "react";
import { TextField, Typography, Box } from "@mui/material";

const FormItem = ({ label, text, inputFields, setInputFields }) => {
    const changeHandler = evt => {
        setInputFields(prev => ({ ...prev, [label]: evt.target.value }));
    };

    return (
        <Box display="flex" width="100%">
            <Typography fontSize="15px" margin=" auto auto auto 0">
                {text}
            </Typography>
            <TextField
                type="number"
                min="0"
                step="1"
                label={label}
                id="outlined-size-normal"
                value={inputFields[label]}
                onChange={changeHandler}
            />
        </Box>
    );
};

export default FormItem;
