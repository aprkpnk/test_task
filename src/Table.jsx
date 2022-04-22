import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { SimpleDialog } from "./Popup";
import { data } from "./Data"


export default function BasicTable() {
  const [open, setOpen] = useState(false);

  const kyiv = data.Kyivska.G;
  const odesa = data.Odeska.G;
  const lviv = data.Lvivska.G;

  function createData(
    name,
    x2017,
    y2017,
    z2017,
    x2018,
    y2018,
    z2018,
    x2019,
    y2019,
    z2019
  ) {
    x2017 = JSON.stringify(x2017, null, 2).slice(1, -1);
    y2017 = JSON.stringify(y2017, null, 2).slice(1, -1);
    z2017 = JSON.stringify(z2017, null, 2).slice(1, -1);
    x2018 = JSON.stringify(x2018, null, 2).slice(1, -1);
    y2018 = JSON.stringify(y2018, null, 2).slice(1, -1);
    z2018 = JSON.stringify(z2018, null, 2).slice(1, -1);
    x2019 = JSON.stringify(x2019, null, 2).slice(1, -1);
    y2019 = JSON.stringify(y2019, null, 2).slice(1, -1);
    z2019 = JSON.stringify(z2019, null, 2).slice(1, -1);
    return {
      name,
      x2017,
      y2017,
      z2017,
      x2018,
      y2018,
      z2018,
      x2019,
      y2019,
      z2019,
    };
  }

  const rows = [
    createData(
      "Kyiv",
      kyiv[2017].XX,
      kyiv[2017].YY,
      kyiv[2017].ZZ,
      kyiv[2018].XX,
      kyiv[2018].YY,
      kyiv[2018].ZZ,
      kyiv[2019].XX,
      kyiv[2019].YY,
      kyiv[2019].ZZ
    ),
    createData(
      "Odesa",
      odesa[2017].XX,
      odesa[2017].YY,
      odesa[2017].ZZ,
      "0",
      "0",
      "0",
      odesa[2019].XX,
      odesa[2019].YY,
      odesa[2019].ZZ
    ),
    createData(
      "Lviv",
      lviv[2017].XX,
      lviv[2017].YY,
      lviv[2017].ZZ,
      lviv[2018].XX,
      lviv[2018].YY,
      lviv[2018].ZZ,
      "0",
      "0",
      "0"
    ),
  ];

  const handleCellClick = (e) => {
    console.log(e.target.textContent);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <TableContainer component={Paper}>
      <SimpleDialog open={open} onClose={handleClose} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell rowSpan={2}>Region</TableCell>
            <TableCell align="center" colSpan={3}>
              2017
            </TableCell>
            <TableCell align="center" colSpan={3}>
              2018
            </TableCell>
            <TableCell align="center" colSpan={3}>
              2019
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>XX</TableCell>
            <TableCell>YY</TableCell>
            <TableCell>ZZ</TableCell>
            <TableCell>XX</TableCell>
            <TableCell>YY</TableCell>
            <TableCell>ZZ</TableCell>
            <TableCell>XX</TableCell>
            <TableCell>YY</TableCell>
            <TableCell>ZZ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.x2017}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.y2017}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.z2017}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.x2018}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.y2018}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.z2018}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.x2019}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.y2019}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {row.z2019}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
