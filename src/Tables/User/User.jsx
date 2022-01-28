import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns &&
              props.columns.map((column, index) => {
                return (
                  <TableCell key={index} align="left">
                    {column}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows &&
            props.rows.map((row) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <p>{row.firstName ? row.firstName : "N/A"}</p>
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <p>{row.gender ? row.gender : "N/A"}</p>
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <p>{row.email ? row.email : "N/A"}</p>
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <p>{row.phone ? row.phone : "N/A"}</p>
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <p>{row.age ? row.age : "N/A"}</p>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
