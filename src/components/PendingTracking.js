import React, { useState, useEffect } from 'react';
import PendingBox from './PendingBox';
import { db } from '../firebase';



function PendingTracking() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('pendingItems')
    .orderBy('date')
    .onSnapshot(snapshot => {
      setItems(snapshot.docs)
    })

    return unsubscribe;
  }, [])

  return (
    <div className='box'>
      <div className='box__header'>
        <p>Pending Tracking</p>
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
