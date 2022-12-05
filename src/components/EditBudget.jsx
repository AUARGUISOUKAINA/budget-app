import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<>
			<input
				required='required'
				type='number'
				id='name'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				type='button'
				onClick={() => props.handleSaveClick(value)}
				
			>
			  save
			</button>
		</>
	);
};

export default EditBudget;
