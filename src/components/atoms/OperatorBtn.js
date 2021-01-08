import React from 'react';

export default function OperatortBtn({ id, opr, handleInput }) {
	const handleClick = () => {
		handleInput(opr);
		document.activeElement.blur();
	};

	return (
		<button id={id} className="btn btn--operator" onClick={ () => handleClick() }>
			<span>{opr}</span>
		</button>
	);
}