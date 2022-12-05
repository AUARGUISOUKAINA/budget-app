import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./AppContext.css"
export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'delete':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'set':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};
const init = {
	budget: 3000,
	expenses: [
		{ id: uuidv4(), name: 'Shopping', cost:800 },
		{ id: uuidv4(), name: 'food', cost: 600 },
		{ id: uuidv4(), name: 'medication', cost: 500 },
		{ id: uuidv4(), name: 'transportation', cost: 100 },
	],
};
export const AppContext = createContext();
export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, init);
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				budget: state.budget,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
