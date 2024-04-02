import React from 'react'
import '@mantine/core/styles.css';
import { Center } from '@mantine/core';

import IndianRupeeAmount from './IndianRupeeAmount';

function Success() {
  return (
   <>
    <div>Success
    <IndianRupeeAmount amount={100000} />
    </div>
    </>

  )
}

export default Success