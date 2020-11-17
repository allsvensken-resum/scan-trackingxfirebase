import React from 'react';
import './Box.css';

function Box({ header, items }) {
  return (
    <div className='box'>
      <div className='box__header'>
        <p>{header}</p>
        <p className='box__number'>{items.length}</p>
      </div>
      {
        items.length === 0 ? (items.length === 0) && <p className='box__content' style={{ color: "rgb(100, 100, 100)" }}>No item.</p>
          :
          items.map(item => <div className='box__content'>
            <div className='box__content__header'>
              <p className='box__tracking'>{item.trackingNumber}</p>
              <p className='box__smalldetails'>{item.date}</p>
            </div>
            <p>{item.address}</p>
            <p className='box__smalldetails box__status'>{item.status}</p>
          </div>)
      }
    </div>
  )
}

export default Box
