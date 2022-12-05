import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import "./List.css"

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (e) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(e.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				className='inp'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul >
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;
