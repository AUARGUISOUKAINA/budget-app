import React from 'react';


const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: {props.budget}DH</span>
			<button type='button'  onClick={props.handleEditClick} >
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
