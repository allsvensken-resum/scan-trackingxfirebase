import React, { useEffect, useState } from 'react';
import './Box.css';

function Box({ item }) {

  const [remaining, setRemaining] = useState('');

  useEffect(() => {

    const now = new Date();
    const date = new Date(item.date);
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const distance = date - now;

    if (distance > 0) {
      const remainingDay = Math.floor(distance / day);
      const remainingHour = Math.floor((distance % day) / hour);
      if (remainingDay > 0 && remainingDay === 1) {
        setRemaining(`in ${remainingDay} day`)
      } else if (remainingDay > 0 && remainingDay > 1) {
        setRemaining(`in ${remainingDay} days`)
      } else {
        if (remainingHour > 1) {
          setRemaining(`in ${remainingHour} hours`)
        } else {
          setRemaining(`in ${remainingHour} hour`)
        }
      }
    }
  }, [item.date])

  return (
    <div className='box__content'>
      <div className='box__content__header'>
        <p className='box__tracking'>{item.trackingNumber}</p>
        <p className='box__smalldetails'>{remaining}</p>
      </div>
      <p>{item.address}</p>
      <p className='box__smalldetails box__status'>{item.status}</p>
    </div>
  )
}

export default Box
