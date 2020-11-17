import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Select, FormControl } from '@material-ui/core';
import './TrackingInput.css';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#1E9DF3',
    textTransform: 'none',
    border: 'none',
    boxShadow: 'none',
    color: 'white',
    height: '3rem',
    fontSize: '1.2rem',
    '&:hover': {
      backgroundColor: '#0774BD',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: "#1E9DF3",
      color: 'white',
      opacity: 0.7
    }
  },

  textField: {
    marginBottom: '1.5rem',
  }

});

function TrackingInput() {

  const classes = useStyles();

  const [trackingNumber, setTrackingNumber] = useState('');
  const [parcelType, setParcelType] = useState();
  const [amount, setAmount] = useState();
  const [disabled, setDisabled] = useState(false);

  const handleTrackingNumber = (e) => {
    if (e.target.value.length === 4 || e.target.value.length === 9) {
      setTrackingNumber(e.target.value += '-');
    } else {
      setTrackingNumber(e.target.value);
    }
  }

  const handleParcelType = (e) => {
    setParcelType(e.target.value);
  }

  return (
    <form className='trackingform'>
      <label className='trackingform__label'>Tracking Number</label>
      <TextField
        className={classes.textField}
        value={trackingNumber}
        onChange={handleTrackingNumber}
        placeholder='xxxx-xxxx-xxxx'
        margin="dense"
        variant="outlined"
        type='text'
        inputProps={{ maxLength: 14 }}
        required
      />
      <FormControl margin='dense' variant="outlined" className={classes.textField}>
        <label className='trackingform__label'>Parcel Type</label>
        <Select
          native
          value={parcelType}
          onChange={handleParcelType}
        >
          <option value={'Normal'}>Normal</option>
          <option value={'Carton'}>Carton</option>
          <option value={'Frozen'}>Frozen</option>
        </Select>
      </FormControl>
      <label className='trackingform__label'>Amount</label>
      <TextField
        className={classes.textField}
        id="outlined-margin-dense"
        defaultValue={1}
        margin="dense"
        variant="outlined"
        type='text'

      />
      <Button disabled={trackingNumber.length !== 14} className={classes.button} variant='contained'>{'Add To Scanned List -->'}</Button>
    </form>
  )
}

export default TrackingInput
