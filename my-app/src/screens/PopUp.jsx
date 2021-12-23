import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import { color } from '@mui/system';


const currencies = [
  {
    value: 'age 5-12',
    label: 'Age 5-12',
  },
  {
    value: 'age 12-15',
    label: 'Age 12-15',
  },
  {
    value: 'age 15-18',
    label: 'Age 15-18',
  },
  {
    value: 'adult',
    label: 'Adult',
  },
];

export default function FormDialog() {

  const [open, setOpen] = useState(false);

  const [age, setAge] = useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link variant="outlined" onClick={handleClickOpen} id="pop-up">here!</Link>
      <Dialog open={open} onClose={handleClose}  >
        <DialogTitle>Submit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>


          <TextField

            margin="dense"
            label="Name of Student"
            type="Name"
            variant="standard"
          />

          <TextField
          style={{
            marginLeft: "40px",
            width: "200px"
          }}
          id="outlined-select-age"
          select
          label="Select"
          value={age}
          onChange={handleChange}
          helperText="Select age"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

          <TextField

            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
            <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="phone"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
