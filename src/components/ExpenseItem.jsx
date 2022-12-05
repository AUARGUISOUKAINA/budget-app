import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./item.css"

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		if(window.confirm("Are You Sure!!"))
		dispatch({
			type: 'delete',
			payload: props.id,
		});
	};

	return (
		<li>
			{props.name}
			<div>
				<span > {props.cost}DH</span>
				<button onClick={handleDeleteExpense} className="btn_supp">supprimer</button>
			</div>
			
		</li>
	);
};

export default ExpenseItem;
