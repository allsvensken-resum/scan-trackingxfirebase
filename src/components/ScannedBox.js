import React, { useState } from 'react';
import { db } from '../firebase';
import './Box.css';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    textTransform: 'none',
    boxShadow: 'none'
  }
})


function ScannedBox({ item }) {

  const classes = useStyles();
  const [error, setError] = useState('');
  const handleCancle = async () => {
    setError('');
    try {
      await db.collection('pendingItems').doc(item.backup.trackingNumber).set({
        ...item.backup
      })
    } catch (error) {
      setError(error.message);
    }

    if (!error) {
      db.collection('scannedItems').doc(item.backup.trackingNumber).delete()
        .catch(error => {
          setError(error.message);
        })
    }
  }

  return (
    <div className='box__content'>
      <div className='box__content__header'>
        <p className='box__tracking'>{item.backup.trackingNumber}</p>
        <Button onClick={handleCancle} className={classes.button} variant="contained" color='secondary'>Cancel</Button>
      </div>
      <p>{item.backup.status}</p>
      <div className='box__content__footer'>
        <p className='box__parcel'>{item.parcelType}</p>
        <p className='box__amount'>{item.amount}</p>
      </div>
    </div>
  )
}

export default ScannedBox
