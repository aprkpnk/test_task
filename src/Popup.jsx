import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function DatePick() {
  const [value, setValue] = React.useState();

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

function BasicSelect() {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={user}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={1}>Peter</MenuItem>
        <MenuItem value={2}>Alina</MenuItem>
        <MenuItem value={3}>Serhii</MenuItem>
      </Select>
    </FormControl>
  );
}

export function SimpleDialog(props) {
  const { open, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>See details here</DialogTitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField id="outlined-number" label="Number" type="number" />
            </TableCell>
            <TableCell>
              {" "}
              <DatePick />
            </TableCell>
            <TableCell>
              {" "}
              <BasicSelect />{" "}
            </TableCell>
            <TableCell>
              <TextField id="outlined-required" defaultValue="Hello World" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};
