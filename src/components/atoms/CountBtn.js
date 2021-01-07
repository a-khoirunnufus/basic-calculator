import React from 'react';

export default function CountBtn(props) {
	const handleClick = () => {
		console.log('count button pressed!');
		document.activeElement.blur();
	};

	return (
		<button id={props.id} className="btn btn--count" onClick={ () => handleClick() }>
			<span>=</span>
		</button>
	);
}