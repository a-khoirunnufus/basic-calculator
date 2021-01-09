import React from 'react';

export default function NumberBtn({id, number, handleInput}) {
	const handleClick = () => {
		handleInput(number);
		document.activeElement.blur();
	};

	return (
		<button id={id} className="btn btn--number" onClick={ () => handleClick() }>
			<span>{number}</span>
		</button>
	);
}