import { Typography, Box } from "@mui/material";

const Results = ({ info }) => {
    return (
        <Box>
            {info.text.map(el => (
                <Box display={"flex"} flexDirection="row" justifyContent="space-between" marginBottom="5px">
                    <Typography>{el.name}</Typography>
                    <Typography>{Number(el.param).toFixed(3)}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default Results;
