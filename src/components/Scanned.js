import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import ScannedBox from './ScannedBox';


function Scanned() {


  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    db.collection('scannedItems').onSnapshot(snapshot => {
      setItems(snapshot.docs);
    })
  }, [])

  return (
    <div className='box'>
      <div className='box__header'>
        <p>Scanned</p>
        <p className='box__number'>{items.length}</p>
      </div>
      {
        items.length === 0 ? <p className='box__content' style={{ color: "rgb(100, 100, 100)" }}>No item.</p>
          : items.map((item, index) => <ScannedBox key={index} item={item.data()} />)
      }
    </div>
  )
}

export default Scanned
