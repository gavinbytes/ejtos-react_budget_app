import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [budge, setBudge] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (b) => {
        setBudge(b);

        if (b > 20000) {
            alert('budget cannot exceed 20,000');
        } else if (b < totalExpenses) {
            alert('budget cannot be lower than total expenses');
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: b,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                    type='number'
                    id='budget'
                    step='10'
                    value={budge}
                    onChange={(e) => handleBudgetChange(e.target.value)}>
                </input>
            </span>
        </div >
    );
};
export default Budget;