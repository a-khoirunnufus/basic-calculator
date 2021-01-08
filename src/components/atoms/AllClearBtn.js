import React from 'react';

export default function AllClearBtn({ id, handleAC }) {
	const handleClick = () => {
		handleAC();
		document.activeElement.blur();
	};

	return (
		<button id={id} className="btn btn--number" onClick={ () => handleClick() }>
			<span>AC</span>
		</button>
	);
}