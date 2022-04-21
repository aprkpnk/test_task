import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function BasicTable() {
  const data = {
    Kyivska: {
      G: {
        2017: {
          XX: {
            value: 150000,
            dateRelease: "2017-12-31",
          },
          YY: {
            value: 100000,
            dateRelease: "2017-12-31",
          },
          ZZ: {
            value: 77,
            dateRelease: "2017-12-31",
          },
        },
        2018: {
          XX: {
            value: 160000,
            dateRelease: "2018-12-31",
          },
          YY: {
            value: 110000,
            dateRelease: "2018-12-31",
          },
          ZZ: {
            value: 72,
            dateRelease: "2018-12-31",
          },
        },
        2019: {
          XX: {
            value: 130000,
            dateRelease: "2019-12-31",
          },
          YY: {
            value: 85000,
            dateRelease: "2019-12-31",
          },
          ZZ: {
            value: 72,
            dateRelease: "2019-12-31",
          },
        },
      },
    },
    Odeska: {
      G: {
        2017: {
          XX: {
            value: 10000,
            dateRelease: "2017-12-31",
          },
          YY: {
            value: 5000,
            dateRelease: "2017-12-31",
          },
          ZZ: {
            value: 45,
            dateRelease: "2017-12-31",
          },
        },
        2019: {
          XX: {
            value: 15000,
            dateRelease: "2019-12-01",
          },
          YY: {
            value: 0,
            dateRelease: "2022-02-18",
          },
          ZZ: {
            value: 0,
            dateRelease: "2022-02-18",
          },
        },
      },
    },
    Lvivska: {
      G: {
        2017: {
          XX: {
            value: 640000,
            dateRelease: "2017-12-31",
          },
          YY: {
            value: 510000,
            dateRelease: "2017-08-01",
          },
          ZZ: {
            value: 67,
            dateRelease: "2017-08-01",
          },
        },
        2018: {
          XX: {
            value: 740000,
            dateRelease: "2018-12-31",
          },
          YY: {
            value: 530000,
            dateRelease: "2018-08-01",
          },
          ZZ: {
            value: 61,
            dateRelease: "2018-08-01",
          },
        },
      },
    },
  };

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
  };

  return (
    <TableContainer component={Paper}>
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
                {JSON.stringify(row.x2017, null, 2)}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {JSON.stringify(row.y2017, null, 2)}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {JSON.stringify(row.z2017, null, 2)}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {JSON.stringify(row.x2018, null, 2)}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {JSON.stringify(row.y2018, null, 2)}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {JSON.stringify(row.z2018, null, 2)}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {JSON.stringify(row.x2019, null, 2)}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {JSON.stringify(row.y2019, null, 2)}
              </TableCell>
              <TableCell align="right" onClick={handleCellClick}>
                {JSON.stringify(row.z2019, null, 2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
