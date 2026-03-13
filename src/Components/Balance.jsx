import React, { useState } from 'react'

const Balance = ({Balances}) => {
  return (
    <div className='flex'>
        {/* Balance Part */}
        <div className='font-bold'>
            <p className='text-xl'>Balance</p>
            <h2>&#8377;{Balances}</h2>

        </div>
    </div>
  )
}

export default Balance;
  