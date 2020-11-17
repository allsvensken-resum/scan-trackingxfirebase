import React, { useState, useEffect } from 'react';
import PendingBox from './PendingBox';
import { db } from '../firebase';



function PendingTracking() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    db.collection('pendingItems').onSnapshot(snapshot => {
      setItems(snapshot.docs)
    })
  }, [])

  return (
    <div className='box'>
      <div className='box__header'>
        <p>Pending</p>
        <p className='box__number'>{items.length}</p>
      </div>
      {
        items.length === 0 ? <p className='box__content' style={{ color: "rgb(100, 100, 100)" }}>No item.</p>
          :
          items.map((item, index) => <PendingBox key={index} item={item.data()} />)
      }
    </div>
  )
}

export default PendingTracking
