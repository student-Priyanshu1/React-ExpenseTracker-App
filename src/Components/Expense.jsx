import React from 'react'

const Expense = ({ Expense }) => {
    return (
        <div className='flex'>
            <div className='font-bold'>
                <p className='text-xl'>Expense</p>
                <h2 className='text-red-600'>&#8377;{Expense}</h2>

            </div>

        </div>
    )
}

export default Expense;
