import React, { useEffect } from 'react';
import './Box.css';

function Box({ item }) {

  const now = new Date();

  useEffect(() => {
    const date = new Date(item.date.toString());
    console.log(now)
    console.log(date)
  }, [])

  return (
    <div className='box__content'>
      <div className='box__content__header'>
        <p className='box__tracking'>{item.trackingNumber}</p>
        <p className='box__smalldetails'>{item.date}</p>
      </div>
      <p>{item.address}</p>
      <p className='box__smalldetails box__status'>{item.status}</p>
    </div>
  )
}

export default Box
