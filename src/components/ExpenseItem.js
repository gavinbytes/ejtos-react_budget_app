import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const styles = {
    green: {
        borderRadius: '100%',
        backgroundColor: '#94e494',
        color: 'white',
        fontWeight: "bolder",
    },
    red: {
        borderRadius: '100%',
        backgroundColor: 'red',
        color: 'white',
        fontWeight: "bolder",
    }
};

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.symbol}{props.cost}</td>
            <td><button style={styles.green} className="btn btn-circle" onClick={event => increaseAllocation(props.name)}>+</button></td>
            <td><button style={styles.red} className="btn btn-circle" onClick={event => decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
