import React, { useState, useEffect } from 'react';
import { tracking } from './MOCK_DATA';
import Box from './Box';

function Scanned() {

  const [items, setItems] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <Box header='Scanned' items={items} />
  )
}

export default Scanned
