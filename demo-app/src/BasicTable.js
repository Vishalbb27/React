import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

function createData(number, item, qty, price) {
  return { number, item, qty, price };
}
const rows = [
  createData(1, "AppleCider", 5, 200),
  createData(2, "MangoShots", 2, 400),
  createData(3, "TomatoPunch", 5, 600),
];
const BasicTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sl No.</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        {console.log(rows)}
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.item}>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            );
          })}
          ;
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
