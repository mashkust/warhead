import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material";

const TableResult = ({ table }) => {
    const cellParams = ["", "m", "w", "Δw", "t", "Δt", "Δm"];
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {cellParams.map(el => (
                                <TableCell align="right">{el}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table.map(row => {
                            return (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    {row.param.map(el => (
                                        <TableCell align="right">{Number(el).toFixed(3)}</TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TableResult;
