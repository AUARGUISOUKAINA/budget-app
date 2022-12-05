import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? swal({title: "danger",title:"look to your budget",icon: "warning"}) :  swal({title: "Good job!",icon: "success"});;

	return (
		<div className='remng'>
			<span>Remaining: {budget - totalExpenses} DH</span>
		</div>
	);
};

export default RemainingBudget;
