import React from 'react';

export default function CountBtn({ id, handleCount }) {
	const handleClick = () => {
		handleCount('=');
		document.activeElement.blur();
	};

	return (
		<button id={id} className="btn btn--count" onClick={ () => handleClick() }>
			<span>=</span>
		</button>
	);
}