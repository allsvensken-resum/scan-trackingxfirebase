import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Select, FormControl } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import './TrackingInput.css';
import { db } from '../firebase';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#1E9DF3',
    textTransform: 'none',
    border: 'none',
    boxShadow: 'none',
    color: 'white',
    height: '3rem',
    fontSize: '1.1rem',
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
  },

  alert: {
    marginBottom: '1.5rem'
  }

});

function TrackingInput() {

  const classes = useStyles();

  const [trackingNumber, setTrackingNumber] = useState('');
  const [parcelType, setParcelType] = useState('Normal');
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState('');

  const handleTrackingNumber = (e) => {
    if (e.target.value.length === 4 || e.target.value.length === 9) {
      setTrackingNumber(e.target.value += '-');
    } else {
      setTrackingNumber(e.target.value);
    }
  }

  const fetchPendingItems = async () => {
    try {
      const resp = await db.collection('pendingItems').doc(trackingNumber).get()
      const data = resp.data();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }


  const handleParcelType = (e) => {
    setParcelType(e.target.value);
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    setError('');
    const backup = await fetchPendingItems();
    try {
      await db.collection('scannedItems').doc(trackingNumber).set({
        backup: backup,
        amount: amount,
        parcelType: parcelType
      })
    } catch (error) {
      setError(error.message);
    }

    db.collection('pendingItems').doc(trackingNumber).delete().catch(error => {
      console.log(error.message);
      setError(error.message);
    })


  }

  return (
    <form onSubmit={handleAdd} className='trackingform'>
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
      <label className='trackingform__label'>Parcel Type</label>
      <FormControl margin='dense' variant="outlined" className={classes.textField}>
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
        margin="dense"
        variant="outlined"
        type='text'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {error && <Alert className={classes.alert} severity="error">Check you tracking number !</Alert>}
      <Button type='submit' disabled={trackingNumber.length !== 14} className={classes.button} variant='contained'>{'Add To Scanned List -->'}</Button>
    </form>
  )
}

export default TrackingInput
