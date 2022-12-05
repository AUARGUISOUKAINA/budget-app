import React from 'react';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import "./App.css"

const App = () => {
	return (
		<AppProvider>
			<div>
				<h1 >Budget Planner</h1>
        <div className='all'>
				<div className='all_E'>
					<div >
						<Budget />
					</div>
					<div >
						<RemainingBudget />
					</div>
					<div>
						<ExpenseTotal />
					</div>
				</div>
				<h3>Expenses</h3>
				<div >
					<div>
						<ExpenseList />
					</div>
				</div>
				<h3 >Add Expense</h3>
				<div>
					<div>
						<AddExpenseForm />
					</div>
				</div>
        </div>
			</div>
		</AppProvider>
	);
};

export default App;
