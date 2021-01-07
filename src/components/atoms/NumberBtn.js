import React from 'react';

export default function NumberBtn(props) {
	const handleClick = () => {
		console.log('number button pressed!');
		document.activeElement.blur();
	};

	return (
		<button id={props.id} className="btn btn--number" onClick={ () => handleClick() }>
			<span>{props.number}</span>
		</button>
	);
}