import React from 'react';

export default function CountBtn() {
	const handleClick = () => {
		console.log('count button pressed!');
		document.activeElement.blur();
	};

	return (
		<button className="btn btn--count" onClick={ () => handleClick() }>
			<span>=</span>
		</button>
	);
}