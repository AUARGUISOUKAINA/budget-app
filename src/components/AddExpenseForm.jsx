import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import "./add.css"

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'add',
			payload: expense,
		});

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='addex'>
				<div >
					<label for='name'>Name:</label><br />
					<input
						required='required'
						type='text'
						id='name'
						placeholder='enter name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div >
					<label for='cost'>Cost:</label><br />
					<input
						required='required'
						type="number"
						id='cost'
						placeholder='enter Cost'
						value={cost}
						onChange={(e) => setCost(e.target.value)}
					/>
				</div>
			</div>
			<div>
				<div >
					<button className='btn_save'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
