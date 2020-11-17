import React, { useState, useEffect } from 'react';
import { tracking } from './MOCK_DATA';
import Box from './Box';




function PendingTracking() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(tracking);
  }, [])

  return (
    <Box header='Pending Tracking' items={items} />
  )
}

export default PendingTracking
