import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { TablePagination } from "@mui/material";

const rows = [
  { name: "Alice", select: "select", age: 25, country: "USA" },
  { name: "Charlie", select: "select", age: 28, country: "India" },
  { name: "Bob", select: "select", age: 30, country: "UK" },
  { name: "Alice", select: "select", age: 25, country: "USA" },
  { name: "Charlie", select: "select", age: 28, country: "India" },
  { name: "Bob", select: "select", age: 30, country: "UK" },
  { name: "Alice", select: "select", age: 25, country: "USA" },
  { name: "Charlie", select: "select", age: 28, country: "India" },
  { name: "Bob", select: "select", age: 30, country: "UK" },
];

const FormTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#f9f9f9",
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Data Table Practice
      </Typography>

      <TableContainer
        className="mt-5"
        component={Paper}
        sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 1000 }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell align="center">
                <strong>Name</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Age</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Country</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Select</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell align="center">{row.country}</TableCell>
                  <TableCell align="center">{row.select}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length} 
          page={page} 
          onPageChange={handleChangePage} 
          rowsPerPage={rowsPerPage} 
          onRowsPerPageChange={handleChangeRowsPerPage} 
          rowsPerPageOptions={[2, 4, 6]} 
        />
      </TableContainer>
    </Box>
  );
};

export default FormTable;
