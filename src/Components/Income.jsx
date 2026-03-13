import React from 'react'

const Income = ({Income}) => {
  return (
    <div className='flex'>

        <div className='font-bold'>
            <p className='text-xl'>Income</p>
            <h2 className='text-green-500'>&#8377;{Income}</h2>

        </div>
      
    </div>
  )
}

export default Income;
